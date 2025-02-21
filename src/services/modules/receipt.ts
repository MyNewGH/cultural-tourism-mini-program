import request, { API_PREFIX } from '@/services';
import type { IOrderData, IOrderParams, IReceiptCheckRequestParams, IReceiptCheckResponse } from '@/types/receipt';

/** 根据订单号查询结果 */
export const getByOrderNo = (params: { orderNo: string }) => {
  return request.get<IOrderData>(`${API_PREFIX}/receipt/getByOrderNo`, params);
};

/** 提交 */
export const submitReceipt = (params: IOrderParams) => {
  return request.post<string>(`${API_PREFIX}/receipt/submit`, params);
};

/** 获取用户制作列表 */
export const getReceiptList = (data: { pageNum: number; pageSize: number }) => {
  return request.post<{ list: IOrderData[] }>(`${API_PREFIX}/receipt/client/page`, data);
};

/** 检测+制作 */
export const receiptCheck = (data: IReceiptCheckRequestParams) => {
  return request.post<IReceiptCheckResponse>(`${API_PREFIX}/receipt/make`, data, {
    isShowLoading: false,
  });
};
