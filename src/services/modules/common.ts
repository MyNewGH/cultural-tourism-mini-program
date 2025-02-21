import request from '@/services';
import { getLoginCode } from '@/utils/login';
import { setUserLogin } from '@/services/modules/user';

/**
 * 获取上传令牌
 */
interface ResponseActiveData {
  uid: number;
  ex_head: Record<string, any>;
}
export const userActive = (data) => {
  return request.post<ResponseActiveData>('/user-api/user/active', data, {
    isShowLoading: false,
  });
};
interface ResponseAccessData {
  ex_head: any;
  phead: {
    p_id: string;
    uid: string;
    ver: string;
    brand: string;
    cha: string;
    open_id: string;
    userId: string;
    cid: string;
    adid: string;
  };
}
export const userAccess = (data: Record<string, any>) => {
  return request.post<ResponseAccessData>('/user-api/user/access', data, {
    isShowLoading: false,
  });
};

export async function checkIsLogin() {
  try {
    const { code, anonymousCode } = await getLoginCode();
    const { data } = await setUserLogin({ code, anonymousCode });
    return data;
  } catch (e) {
    console.log(e);
  }
}

export const point = (data: Record<string, any>) =>
  request.put('/stat-api/stat/log', data, {
    isShowLoading: false,
  });
