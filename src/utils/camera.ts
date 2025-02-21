import Taro, { CameraContext } from '@tarojs/taro';
import * as FileAction from '@/services/modules/file';
import FormData from '@/utils/formData/formData';
import envUtils from '@/utils/env';
import { Local } from '@/utils/storage';
import * as PhotoAction from '@/services/modules/photo';
import { Dispatch, SetStateAction } from 'react';
import { IReceiptCheckRequestParams } from '@/types/receipt';
import type { IPhotoSizeItem } from '@/types/photo';
import * as ReceiptAction from '@/services/modules/receipt';

/**
 * @desc  从相册选择图片
 * @param options
 */
export const chooseImage = (options: Record<string, any> = {}) => {
  const { beforeCallback, successCallback, ...restOptions } = options;
  return new Promise<Taro.chooseImage.SuccessCallbackResult>((resolve, reject) => {
    beforeCallback && beforeCallback();
    Taro.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
      ...restOptions,
      success: function (res) {
        successCallback && successCallback();
        console.log('获取成功', res);
        resolve(res);
      },
      fail: function (res) {
        console.log('错误', res);
        // @ts-ignore
        if (res.errNo === 10502 || res.errMsg === 'chooseImage:fail cancel') {
          reject(res);
          return;
        }
        Taro.showToast({
          title: '获取照片失败，请重试～',
          icon: 'none',
        });
        reject(res);
      },
    });
  });
};
/**
 * @desc  拍照
 * @param params
 */
export const takePhoto = (params: {
  ctx: CameraContext;
  options: CameraContext.TakePhotoOption;
  statusState?: [boolean, Dispatch<SetStateAction<boolean>>];
}) => {
  return new Promise((resolve, reject) => {
    const { ctx, options } = params;
    if (ctx?.takePhoto) {
      ctx.takePhoto({
        ...options,
        success: async (res) => {
          const _fileUpload = async (name, path, fileName?) => {
            try {
              params.statusState && params.statusState[1](true);
              formData.appendFile(name, path, fileName);
              formData.append('fileSizeMin', 500);
              formData.append('fileSizeMax', 1000);
              let data = formData.getData();
              const { data: fileUploadRes } = await FileAction.fileUpload({
                file: data.buffer,
                contentType: data.contentType,
              });
              Local.set('imagePath', fileUploadRes.url);
              params.statusState && params.statusState[1](false);
              resolve(fileUploadRes.url);
            } catch (e) {
              console.log('图片上传失败', e);
              reject({ error: e, errCode: 900, message: '图片上传失败' });
            }
          };
          console.log('拍照成功！', res);
          let formData = new FormData();

          // 支付宝环境 生成的图片是临时格式，需要获取真实的文件格式
          if (envUtils.isAlipay()) {
            // 获取文件名，不包括文件格式
            // let fileName = res?.tempImagePath.replace(/(.*\/)*([^.]+).*/gi, '$2') || generateRandomFileName();
            // my.detectFileType({
            //   filePath: res.tempImagePath,
            //   success: (fileTypeRes) => {
            //     _fileUpload('file', res.tempImagePath, `${fileName}${fileTypeRes.extension ?? ''}`);
            //   },
            //   fail: (failRes) => {
            //     reject(failRes);
            //     console.log('fileType', failRes);
            //   },
            // });
          } else {
            _fileUpload('file', res.tempImagePath);
          }
        },
      });
    }
  });
};
/**
 * 保存图片到本地相册
 */
export const saveImage = async (url: string) => {
  return new Promise((resolve, reject) => {
    Taro.downloadFile({
      url,
      success: (res) => {
        console.log(res, '成功');
        Taro.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: (saveRes) => {
            console.log('保存成功！', saveRes);
            resolve(saveRes);
          },
          fail: (saveErr) => {
            console.log('保存失败！', saveErr);
            reject(saveErr);
          },
        });
      },
      fail: (res) => {
        console.log(res, '失败');
        reject(res);
      },
    });
  });
};

/**
 * @desc 置信度模型
 */
export const PREDICTS_MODEL = {
  porn: '图片涉黄',
  fandongtaibiao: '未准入台标',
  high_risk_sensitive_map: '敏感地图',
  high_risk_terrorist_uniform: '极端服饰',
  high_risk_social_event: '社会事件',
  anniversary_flag: '特殊标志',
  party_founding_memorial: '建党纪念',
  bloody: '图片血腥',
  cartoon_porn: '色情动漫',
  great_hall: '大会堂',
  sensitive_text: '敏感文字',
  cartoon_leader: '领导人漫画',
  sensitive_flag: '敏感旗帜',
  high_risk_money: '人民币',
  leader_recognition: '敏感人物',
  high_risk_boom: '爆炸',
  plant_ppx: '图片涉毒',
};

/**
 * @desc 抖音图片质量检测
 */
export const ttPhotoCheck = async ({ photo }) => {
  if (envUtils.isTt()) {
    const { data: predicts } = await PhotoAction.ttPhotoCheck(photo);
    let list = predicts.filter((predict) => predict.hit === true);
    if (list.length) throw new Error('抖音图片质量检测失败');
  }
};

/**
 * @desc 回执检测
 */
export const receiptCheck = async ({ photo }) => {
  // try {
  const photoInfo = Local.get<IPhotoSizeItem>('photoInfo');
  const params: IReceiptCheckRequestParams = {
    userImgUrl: photo,
    itemId: photoInfo.hasReceipt as number,
  };
  const { data } = await ReceiptAction.receiptCheck(params);
  if (data.err) {
    console.log('回执检测失败', data);
    throw new Error(data.err);
  }
  // } catch (e) {
  //   console.log('回执检测失败', e)
  // }
};
