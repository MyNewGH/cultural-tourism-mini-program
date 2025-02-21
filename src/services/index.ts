import Taro from '@tarojs/taro';
import { isEmpty } from 'lodash-es';
// import { Base64 } from 'js-base64';
import { STORAGE_ENUM } from '@/constants/common';
import { setGlobalData } from '@/utils/global';
import { Local } from '@/utils/storage';
import getBaseUrl from './config/baseUrl';

import { interceptor } from './config/interceptor';
/** Taro.request(option) 返回值类型约束 */
type RequestReturnsType = string | Record<string, any> | ArrayBuffer;

/** Taro.request(option) 返回值类型 */
export type RequestReturns<T extends RequestReturnsType> = Promise<Taro.request.SuccessCallbackResult<T>>;
const waitingRequest: any = [];

/* 项目接口前缀 */
export const API_PREFIX = '/api/v1/id-photo';

Taro.addInterceptor(interceptor);

async function baseOptions<T extends string | Record<string, any> | ArrayBuffer>(
  params,
  options?: CustomRequest.Options,
  method: keyof CustomRequest.Method = 'GET',
): RequestReturns<T> {
  const { ignoreToken } = options || {};
  const ph = Local.get(STORAGE_ENUM.PHEAD);
  if (isEmpty(ph) && !ignoreToken) {
    return new Promise((res, rej) => {
      waitingRequest.push(() => {
        baseOptions(params, options, method).then(
          (response) => res(response as any),
          (error) => rej(error),
        );
      });
      setGlobalData('waitingRequest', waitingRequest);
    });
  }
  const { url, data } = params;
  const contentType = options?.contentType || 'application/json;charset=UTF-8';
  const headers = options?.headers;
  const exHead = Local.get('exHead');
  // console.log(isEmpty(userInfo))
  // const userInfo = JSON.parse(Taro.getStorageSync('userInfo') || '{}')

  const option = {
    url: getBaseUrl(url), // 地址
    data, // 传参
    method, // 请求方式
    timeout: 40000, // 超时时间 FIXME:暂时先设置长一点，人脸融合接口请求时间很长
    isShowLoading: options?.isShowLoading ?? true, // 是否显示loading
    header: {
      'content-type': contentType,
      Phead: ph,
      ...(isEmpty(exHead) ? {} : { 'Ex-Head': exHead }),
      ...headers,
    },
  };
  // 拦截器将中间的data层数据拦截了一层，尴尬的是，这里需要强转才能
  // @ts-ignore
  return Taro.request(option) as unknown as RequestReturns<T>;
}

export default {
  get<T extends RequestReturnsType>(url: string, data?: any, options?: CustomRequest.Options) {
    const params = { url, data };
    return baseOptions<T>(params, options);
  },

  post<T extends RequestReturnsType>(url: string, data?: any, options?: CustomRequest.Options) {
    const params = { url, data };
    return baseOptions<T>(params, options, 'POST');
  },

  put<T extends RequestReturnsType>(url, data?: any, options?: CustomRequest.Options) {
    const params = { url, data };
    return baseOptions<T>(params, options, 'PUT');
  },

  delete<T extends RequestReturnsType>(url: string, data?: any, options?: CustomRequest.Options) {
    const params = { url, data };
    return baseOptions<T>(params, options, 'DELETE');
  },
};
