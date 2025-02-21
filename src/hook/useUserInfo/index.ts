import { useLoad } from '@tarojs/taro';
import { useState } from 'react';

const getDigitalInfo = async () => {
  return {
    data: {
      isVip: true,
    },
  };
};
type TUserInfo = { isVip?: boolean };
const useUserInfo = (): TUserInfo => {
  const [userInfo, setUserInfo] = useState<TUserInfo>({});
  const initDigitalInfo = async () => {
    try {
      const res = await getDigitalInfo();
      setUserInfo(res.data);
    } catch (e) {
      setUserInfo({} as any);
    }
  };
  useLoad(() => {
    initDigitalInfo();
  });
  return userInfo;
};
export default useUserInfo;
