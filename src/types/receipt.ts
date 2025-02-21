export interface IOrderData {
  /**
   * 主键ID
   */
  id: number;
  /**
   * 证件照地址，订单完成（status=3）返回，仅在证件照有调整时返回
   */
  image: string;
  /**
   * 排版照地址，订单完成（status=3）返回，支持规格：广东驾驶证，港澳通行证
   */
  imagePrint: string;
  /**
   * 回执照地址，订单完成（status=3）返回
   */

  imageReceipt: string;
  /**
   * 回执规格ID
   */
  itemId: number;
  /**
   * 订单号
   */
  orderNo: string;
  orderId: string;
  /**
   * 回执规格参数json
   */
  param: string;
  itemName: string;
  /**
   * 审核驳回理由，审核失败（status=-1）返回
   */
  rejectMsg: string;
  /**
   * 订单状态：2=审核中，3=办理完成，-1=审核失败，-2=取消完成
   */
  status: number;
  userImgUrl: string;
  city: string;
  idcard: string;
  mobile: string;
  name: string;
}

export interface IOrderParams {
  /**
   * 城市
   */
  city: string;
  id: number;
  /**
   * 身份证号码
   */
  idcard: string;
  /**
   * 规格ID
   */
  itemId: number;
  /**
   * 手机号
   */
  mobile: string;
  /**
   * 姓名
   */
  name: string;
  userId: number;
  orderId: number;
}

export interface IReceiptCheckRequestParams {
  /**
   * 规格ID
   */
  itemId: number;
  /**
   * 用户头像URL
   */
  userImgUrl: string;
  [property: string]: any;
}

export interface IReceiptCheckResponse {
  /**
   * id
   */
  id: number;
  /**
   * 规格ID
   */
  itemId: number;
  /**
   * 效果图
   */
  white: string;
  [property: string]: any;
}
