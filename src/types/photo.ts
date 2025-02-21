export interface IPhotoSizeTypeItem {
  name: string;
  picBase64: string;
}

export interface IPhotoSizeItem {
  /**
   * 颜色
   */
  color: string;
  /**
   * 创建时间
   */
  createTime: string;
  /**
   * 文件大小
   */
  fileSize: string;
  id: number;
  /**
   * 排序
   */
  range: string;
  /**
   * 尺寸
   */
  size: string;
  /**
   * 尺寸id
   */
  sizeId: number;
  /**
   * 尺寸名称
   */
  sizeName: string;
  /**
   * 大小
   */
  spec: string;
  /**
   * 标题
   */
  title: string;
  /**
   * 类型
   */
  type: string;
  tag?: string;
  hasReceipt?: number;
  /**
   * 更新时间
   */
  updateTime: string;
  [property: string]: any;
}

export interface IMaterialItem {
  /**
   * 跳转地址
   */
  clickUrl?: string;
  /**
   * 物料内容
   */
  content: string;
  createTime: string;
  /**
   * 商品id
   */
  goodsId: number;
  id: number;
  /**
   * 物料名称
   */
  label: string;
  /**
   * 物料id
   */
  materialId: number;
  /**
   * 物料key/入参
   */
  materialKey: string;
  positionKey: string;
  /**
   * 排序
   */
  rank?: number;
  /**
   * 启用状态
   */
  status: number;
  /**
   * 物料类型
   */
  type: string;
  updateTime: string;
  [property: string]: any;
}

export interface IBgColorItem {
  /**
   * 颜色code
   */
  code: string;
  /**
   * 后端color入参
   */
  colorCode: string;
  /**
   * 颜色名称
   */
  colorName: string;
  [property: string]: any;
}

export interface IBasicPhotoPreviewParams {
  /**
   * 颜色列表
   */
  bkList: string[];
  /**
   * 默认300
   */
  dpi?: string;
  /**
   * 文件大小限制kb
   */
  fileSize?: string;
  /**
   * 图片BASE64 jpg,png
   */
  photo: string;
  /**
   * 图片大小 当spec=12时需要
   */
  size?: string;
  /**
   * 证件照类型id
   */
  spec: string;
  /**
   * 图片类型
   */
  type: string;
  [property: string]: any;
}

export interface IBasicPhotoPreviewResponse {
  /**
   * 图片key
   */
  photoKey: string;
  /**
   * 预览图片单张
   */
  previewUrls: Record<string, string>;
  /**
   * 打印预览图片
   */
  printPreviewUrls: Record<string, string>;
  /**
   * 图片大小
   */
  size: number[];
  [property: string]: any;
}

export interface IClothPhotoPreviewParams {
  /**
   * 背景颜色
   */
  bk: string;
  /**
   * 服装code
   */
  dressCode: string;
  /**
   * 照片key
   */
  photoKey: string;
  [property: string]: any;
}

export interface IClothPhotoPreviewResponse {
  /**
   * 背景颜色
   */
  bk: string;
  /**
   * 服装code
   */
  dressCode: string;
  /**
   * 打印预览图片url
   */
  printUrl: string;
  /**
   * 预览图片url
   */
  resultUrl: string;
  [property: string]: any;
}

export interface IPhotoCheckParams {
  photo: string;
}

export interface IPhotoCheckResponse {
  /**
   * 是否通过
   */
  check: boolean;
  /**
   * 详细参数
   */
  detectResult: string;
  /**
   * 原因 失败才有
   */
  reasons: string[];
  [property: string]: any;
}

export interface IReceiptPhotoSizeResponse {
  itemId: number;
  itemName: string;
  param: string;
  price: string;
  recommendPrice: string;
  sizeMm: string;
  /**
   * 照片尺寸
   */
  sizePx: string;
  [property: string]: any;
}

export interface IGroupConfigResponse {
  /**
   * 最大可选服装数量
   */
  clothingOptional: number;
  createTime: string;
  /**
   * 默认换装 1开启
   */
  dressUp: number;
  /**
   * 归因分组key
   */
  groupKey: string;
  id: number;
  /**
   * 启用状态
   */
  status: number;
  updateTime: string;
  [property: string]: any;
}
export interface ITtPhotoCheckResponse {
  /**
   * 检测结果-状态码
   */
  error: number;
  // 检测结果-消息
  message: string;
  /**
   * 检测结果-置信度列表
   */
  predicts: any[];
  /**
   * 检测结果-置信度-模型/标签
   */
  model_name: string;
  // 检测结果-置信度-结果，当值为 true 时表示检测的图片包含违法违规内容，比如是广告
  hit: boolean;
}
