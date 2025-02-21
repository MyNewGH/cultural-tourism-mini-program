import { point } from '@/services/modules/common';
import { Local } from '@/utils';
// import Taro from '@tarojs/taro'

/**
 * 埋点结构
 */
export interface BuriedPointModal {
  /**
   * 额外参数，具体字段名参照埋点表
   */
  args: Record<string, any>;
  /**
   * 事件名
   */
  event_name: string;
  /**
   * 事件类型
   */
  event_type: string;
  /**
   * 请求ID，请求时客户端的毫秒级时间戳
   */
  request_id: number;
}

/**
 * 埋点
 * @param eventType 事件类型
 * @param eventName 事件名称
 * @param args 参数
 */
type TEventName =
  | 'app_start'
  | 'new_profile'
  | 'virtual_role'
  | 'personal_page'
  | 'recharge_coins'
  | 'pay_history'
  | 'agreement_list'
  | 'goods_store'
  | 'id_photo'
  | 'id_photo_flow'
  | 'personal'
  | 'receipt'
  | 'ai_id_photo';

export async function buriedPoint(eventType: 'state' | 'show' | 'click', eventName: TEventName, args: Record<`customer_param${number}`, any>) {
  const pointInfo = Local.get('pointInfo');
  // const systemInfo = Taro.getSystemInfoSync()
  let clickid = parseString(pointInfo.clickid);
  if (Array.isArray(clickid)) clickid = clickid[0];

  const argsParams = {
    ...args,
    param7: pointInfo.adid,
    param8: clickid,
  };
  const data: BuriedPointModal = {
    event_type: eventType,
    event_name: eventName,
    args: argsParams,
    request_id: Date.now(),
  };
  try {
    await point(data);
  } catch (e) {}
}

function parseString(str) {
  try {
    // 尝试解析字符串为数组
    let arr = JSON.parse(str);
    if (Array.isArray(arr)) {
      return arr; // 返回解析后的数组
    } else {
      return str; // 如果解析后不是数组，则返回原始字符串
    }
  } catch (error) {
    // 解析失败，字符串不是数组字符串，返回原始字符串
    return str;
  }
}
