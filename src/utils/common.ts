export function sortObjKeyToString(obj) {
  const searchParams = new URLSearchParams();
  // 将属性名按 ASCII 码顺序排序
  const sortedKeys = Object.keys(obj).sort((a, b) => a.localeCompare(b));
  for (const key of sortedKeys) {
    if (key === 'url') {
      console.log('key url');
      searchParams.set(key, decodeURIComponent(obj[key]));
    }
    searchParams.set(key, obj[key]);
  }
  return searchParams.toString();
}

/**
 * @desc 轮询
 */
export function polling(cb: () => [boolean, any], duration: number) {
  let timer: undefined | number = void 0;
  const _fn = () => {
    // @ts-ignore
    timer = setTimeout(() => {
      clearTimeout(timer);
      const [flag, result] = cb();
      // cb 返回 true, 继续轮询
      if (flag) {
        _fn();
        console.log('继续轮询');
      } else {
        return result;
      }
      // return flag ? _fn() : result;
    }, duration);
  };
  return _fn();
}
/**
 * @desc 同步轮询
 */
export async function pollingSync<T>(cb: () => [boolean, T], duration: number = 1000): Promise<T> {
  return new Promise((resolve) => {
    const _fn = () => {
      const [flag, result] = cb();
      if (flag) {
        console.log('继续轮询');
        setTimeout(_fn, duration);
      } else {
        console.log('轮询结束');
        resolve(result);
      }
    };
    _fn();
  });
}

export function objectToString(style: object | string): string {
  if (style && typeof style === 'object') {
    let styleStr = '';
    Object.keys(style).forEach((key) => {
      const lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      styleStr += `${lowerCaseKey}:${style[key]};`;
    });
    return styleStr;
  }
  if (style && typeof style === 'string') {
    return style;
  }
  return '';
}
/**
 * 对象转query字符串
 */
export const obj2QueryString = (data) => {
  const result: string[] = [];
  for (var key in data) {
    const value = data[key];
    if (value.constructor == Array) {
      value.forEach(function (_value) {
        result.push(key + '=' + _value);
      });
    } else {
      result.push(key + '=' + value);
    }
  }
  return result.join(',');
};
export function parseQueryString(queryString: string, notation = ','): Record<string, any> {
  // 去除字符串开头的问号
  if (queryString.startsWith('?')) {
    queryString = queryString.slice(1);
  }

  // 使用split方法将字符串以 "&" 分割成数组
  const params = queryString.split(notation);

  // 使用reduce方法将数组转换为对象
  return params.reduce(function (result, param) {
    const parts = param.split('=');

    // 将参数名和参数值添加到对象中
    result[parts[0]] = decodeURIComponent(parts[1] || '');

    return result;
  }, {});
}

/**
 * @desc 时间戳转为对应时间格式
 * @param {Object} date new Date()
 * @param {String} fmt 格式化的格式
 * @return 格式化后的时间
 */
export function dateFormat(date, fmt = 'YYYY-MM-DD') {
  if (!date) return '';
  let dateTemp: string | Date = '';
  if (date > 0) {
    dateTemp = new Date(Number(date));
  } else {
    dateTemp = new Date(date);
  }
  if (dateTemp.toString() === 'Invalid Date') {
    dateTemp = new Date(date.toString().replace(/-/g, '/'));
    if (dateTemp.toString() === 'Invalid Date') {
      return date;
    }
  }
  date = dateTemp;
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'D+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1?.length));
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k])?.length));
    }
  }
  return fmt || '';
}
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
