import Base64 from '@/utils/base64';
import { DEVICE_TYPE, cha, STORAGE_ENUM, VER, P_ID } from '@/constants/common';
import { checkIsLogin, userAccess, userActive } from '@/services/modules/common';
import { Local } from '@/utils/storage';
import mp from '@/utils/miniApi';
import { isEmpty, fromPairs } from 'lodash-es';
import { getGlobalData } from '@/utils/global';
import { buriedPoint } from '@/utils/point';
import { obj2QueryString } from '@/utils/common';
import * as UserAction from '@/services/modules/user';
/**
 * 设备信息
 *
 * 设备标识
 *
 * 自定义公参
 */
export interface BuriedPointActiveReq {
  /**
   * 设备品牌
   */
  brand: string;
  /**
   * 系统语言
   */
  language: string;
  /**
   * 设备型号
   */
  model: string;
  /**
   * 操作系统名称
   */
  os_type: string;
  /**
   * 操作系统版本号
   */
  os_version_code: string;
  /**
   * 运行平台版本号
   */
  platform_version_code: string;
  /**
   * 设备唯一标识，device.getDeviceId
   */
  device_id: string;
  /**
   * 渠道
   */
  cha?: string;
  /**
   * 产品ID
   */
  p_id: number;
  /**
   * 版本号
   */
  ver: number;
  device_type: string;
}

const setInfo = (phead) => {
  Local.set(STORAGE_ENUM.PHEAD, phead);
  const info = fromPairs(
    Base64.decode(phead)
      .split(',')
      .map((pair) => pair.split('=')),
  );
  Local.set(STORAGE_ENUM.USERINFO, info);
};

/** 应用id */

/**
 * 埋点 --- 设备激活
 */
export async function buriedPointActive(_query?: Record<string, any>) {
  const pHead = Local.get(STORAGE_ENUM.PHEAD);
  if (!isEmpty(pHead)) {
    await buriedPointUserAccess(pHead);
    return;
  }
  try {
    // 开始激活
    const systemInfo = mp.getSystemInfoSync();
    const { openid: uuid, userId } = (await checkIsLogin()) || {};
    const system = systemInfo.system.split(' ');
    const data: BuriedPointActiveReq = {
      brand: cha,
      model: systemInfo.model,
      os_type: system[0],
      os_version_code: system[1],
      platform_version_code: systemInfo.version || '',
      language: systemInfo.language,
      device_id: uuid as string,
      ver: VER,
      p_id: P_ID,
      device_type: DEVICE_TYPE,
      cha,
    };
    const pointInfo = Local.get('pointInfo');
    let unEnCodePhead = `p_id=${P_ID},ver=${VER},brand=${cha},cha=${systemInfo.appName || cha},open_id=${uuid},userId=${userId},adid=${pointInfo.adid}`;
    // console.log('getSystemInfoSync', data, unEnCodePhead)
    // eslint-disable-next-line @typescript-eslint/no-shadow
    let pHead = Base64.encode(unEnCodePhead);
    // Local.set(STORAGE_ENUM.PHEAD, pHead)
    setInfo(pHead);
    const res = await userActive(data);
    const uid = res.data.uid || '';
    pHead = Base64.encode(`${unEnCodePhead},uid=${uid}`);
    // Local.set(STORAGE_ENUM.PHEAD, pHead)
    setInfo(pHead);
    // 首次激活，调用用户访问接口
    await buriedPointUserAccess(pHead);
  } catch (error) {
    console.log(error);
  }
}
async function buriedPointUserAccess(Phead: string) {
  try {
    const res = await userAccess({ Phead });
    const {
      ex_head,
      // eslint-disable-next-line @typescript-eslint/no-shadow
      phead: { p_id, uid, ver, brand, cha, open_id, userId, adid },
    } = res.data;
    const pHead = Base64.encode(
      `p_id=${p_id},ver=${VER || ver},brand=${brand},uid=${uid},cha=${cha},open_id=${open_id},userId=${userId},adid=${adid}`,
    );
    const exHead = Base64.encode(obj2QueryString(ex_head));
    buriedPoint('state', 'app_start', {});

    const pointInfo = Local.get('pointInfo');
    await UserAction.register({ cid: pointInfo.clickid });
    Local.set('exHead', exHead);
    setInfo(pHead);
    const list = getGlobalData('waitingRequest');
    while (list.length > 0) {
      const lp = list.shift();
      lp?.();
    }
  } catch (e) {}
}
