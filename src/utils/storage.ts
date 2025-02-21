import Taro from '@tarojs/taro';
import { pollingSync } from '@/utils/common';
import { P_ID } from '@/constants/common';

export const Local = {
  setKey(key: string) {
    return `${P_ID}_${key}`;
  },
  async pollingGet<T>(key: string) {
    return await pollingSync<T>(() => {
      let content: any = void 0;
      try {
        content = JSON.parse(Taro.getStorageSync(Local.setKey(key))) as T;
        return [false, content];
      } catch (e) {
        console.log('e', e);
        return [true, content];
      }
    });
  },
  get<T = any>(key: string): T {
    return Taro.getStorageSync(Local.setKey(key)) ? JSON.parse(Taro.getStorageSync(Local.setKey(key))) : {};
  },
  set<T>(key: string, val: T) {
    Taro.setStorageSync(Local.setKey(key), JSON.stringify(val));
  },
};
