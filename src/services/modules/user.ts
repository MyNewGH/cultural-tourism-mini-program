import request, { API_PREFIX } from '@/services';

export function setUserLogin(data: { anonymousCode: string; code: string }) {
  return request.post<{
    anonymousOpenid: string;
    openid: string;
    sessionKey: string;
    unionid: string;
    expiresIn: string;
    userId: string;
  }>('/api/v1/id-photo/user/login', data, { ignoreToken: true });
}
/**
 * @desc 首次登录注册
 */
export function register(data: { cid: string }) {
  return request.post(`${API_PREFIX}/user/register`, data);
}
