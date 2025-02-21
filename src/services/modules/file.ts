import request from '@/services';

/** 文件上传 */
export const fileUpload = (data: { file: any; contentType?: string }) => {
  // MARK: 统一在这里处理设置图片大小
  return request.post<{ name: string; url: string }>('/api/v1/id-photo/management/upload', data.file, {
    contentType: data.contentType,
    isShowLoading: false,
  });
};
