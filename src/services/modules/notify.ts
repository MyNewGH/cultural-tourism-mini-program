// import type { IDictItem } from '@/types/notify'
import request, { API_PREFIX } from '@/services';

/** 单次支付成功通知 */
export const getSuccessfulPayNotification = (orderId: string) => {
  return request.get(`${API_PREFIX}/notify/photo/make/${orderId}`);
};
