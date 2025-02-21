import request, { API_PREFIX } from '@/services';
import type {
  IBgColorItem,
  IPhotoSizeTypeItem,
  IPhotoSizeItem,
  IMaterialItem,
  IBasicPhotoPreviewParams,
  IBasicPhotoPreviewResponse,
  IClothPhotoPreviewParams,
  IClothPhotoPreviewResponse,
  IPhotoCheckParams,
  IPhotoCheckResponse,
  IReceiptPhotoSizeResponse,
  IGroupConfigResponse,
} from '@/types/photo';

/** 照片尺寸列表 */
export const getPhotoSizeList = (data: { productId: string; type?: string; pageNum: number; pageSize: number; goodsName?: string }) => {
  return request.post<{ list: IPhotoSizeItem[] }>(`${API_PREFIX}/photo/size/page?productId=${data.productId}`, data);
};

/** 照片尺寸类型列表 */
export const getPhotoSizeTypeList = (positionKey: string) => {
  return request.get<IPhotoSizeTypeItem[]>(`${API_PREFIX}/photo/sizeType/list`, { positionKey });
};

/** 物料获取 */
export const getMaterial = (data: { positionKey: string; pageSize: number; pageNum: number }) => {
  return request.post<{ list: IMaterialItem[] }>(`${API_PREFIX}/photo/material/list`, data);
};

/** 照片颜色列表 */
export const getBgColorList = () => {
  return request.get<IBgColorItem[]>(`${API_PREFIX}/photo/color/list`);
};
/** 基础照片预览 */
export const basicPhotoPreview = (data: IBasicPhotoPreviewParams) => {
  return request.post<IBasicPhotoPreviewResponse>(`${API_PREFIX}/photo/base/preview`, data);
};
/** 服装照片预览 */
export const clothPhotoPreview = (data: IClothPhotoPreviewParams) => {
  return request.post<IClothPhotoPreviewResponse>(`${API_PREFIX}/photo/dress/preview`, data);
};
/** 照片检测 */
export const photoCheck = (data: IPhotoCheckParams) => {
  return request.post<IPhotoCheckResponse>(`${API_PREFIX}/photo/check`, data);
};
/** 获取回执自定义尺寸 */
export const getReceiptPhotoSize = (receiptId: number) => {
  return request.get<IReceiptPhotoSizeResponse>(`${API_PREFIX}/photo/receipt/size`, { receiptId });
};
/** 获取归因分组配置 */
export const getGroupConfig = (groupKey: string) => {
  return request.get<IGroupConfigResponse>(`${API_PREFIX}/photo/group/config`, { groupKey });
};

/** 抖音图片审核 */
export const ttPhotoCheck = (image: string) => {
  return request.get<{ model_name: string; hit: boolean }[]>(
    `${API_PREFIX}/photo/douYin/censorImage`,
    { image },
    {
      isShowLoading: false,
    },
  );
};

/** 图片压缩 */
export const compressImg = (data: { fileSizeMax: number; fileSizeMin: number; userImgUrl: string }) => {
  return request.post<{
    name: string;
    url: string;
  }>(`${API_PREFIX}/management/compressImg`, data);
};
/** 形象照生成 */
export const generatingModelingPhoto = (data: {
  // fileSizeMax: number
  // fileSizeMin: number
  photo: string;
  abilityId: string;
}) => {
  return request.post<{
    result: string;
  }>(`${API_PREFIX}/photo/image/photo`, data, {
    isShowLoading: false,
  });
};
/** 照片尺寸裁切 */
export const photoCrop = (data: { photo: string; size: string }) => {
  return request.post<{
    imagePhoto: string;
  }>(`${API_PREFIX}/photo/image/photo/size`, data);
};
