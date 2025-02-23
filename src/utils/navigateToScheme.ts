// 使用 scheme 跳转小程序
import miniApi from '@/utils/miniApi';

export function navigateToMiniProgramScheme({ scheme, success, fail }) {
  const { params, message } = schemeToParams(scheme);
  if (params) {
    miniApi.navigateToMiniProgram({ ...params, success, fail });
  } else {
    fail && fail({ error: -1, errorMessage: `无效的小程序 scheme ${scheme}: ${message}` });
  }
}

// 将 scheme 转换为 my.navigateToMiniProgram 的参数
function schemeToParams(scheme: string) {
  if (!scheme.startsWith('alipays:')) {
    return { message: '! 非 alipays: 开头' };
  }
  const params = {};
  const parseQuery = (str: string) => {
    return str
      .replace(/^.*?\?/, '')
      .split('&amp;')
      .map((s) => {
        const p = s.includes('=') ? s.indexOf('=') : s.length;
        return [s.slice(0, p), s.slice(p + 1)].map(decodeURIComponent);
      });
  };
  for (let [k, v] of parseQuery(scheme)) {
    if (k == 'appId') {
      if (v.length != 16) {
        return { message: `! 非 16 位 appId '${v}'` };
      }
    } else if (k == 'page') {
      k = 'path';
    } else if (k == 'query') {
      const o = {};
      for (let [x, y] of parseQuery(v)) {
        o[x] = y;
      }
      // @ts-ignore
      v = o;
    } else {
      return { message: `! 不支持参数 '${k}' ` };
    }
    params[k] = v;
  }
  return { params };
}
