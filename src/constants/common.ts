import Taro, { ENV_TYPE } from '@tarojs/taro';

export const OSS_PATH = 'https://sunny.tos-cn-guangzhou.volces.com/mini-program/';

export const VER = 10007;

export const ENV_ENUM = {
  ALIPAY: 'ALIPAY',
  TT: 'DOUYIN',
  WEAPP: 'WECHAT',
};

/** 版本id */
export const DEVICE_TYPE = Taro.getEnv();
export const cha = ENV_ENUM[Taro.getEnv()];

export const STORAGE_ENUM = {
  USERINFO: 'userInfo',
  PHEAD: 'phead',
};
export const ALIPAY_P_ID = 39022;
export const WEAPP_P_ID = 39020;
export const TT_P_ID = 39021;
const P_ID_MAP = {
  [ENV_TYPE.ALIPAY]: ALIPAY_P_ID,
  [ENV_TYPE.WEAPP]: WEAPP_P_ID,
  [ENV_TYPE.TT]: TT_P_ID,
};
export const P_ID = P_ID_MAP[Taro.getEnv()];

const ORDER_FROM_MAP = {
  [ENV_TYPE.ALIPAY]: ALIPAY_P_ID,
  [ENV_TYPE.WEAPP]: 'wechat',
  [ENV_TYPE.TT]: 'douyin',
};
export const ORDER_FROM = ORDER_FROM_MAP[Taro.getEnv()];
export const VIDEO_AD_ID = 'i4yh2velv53c0242yl';
