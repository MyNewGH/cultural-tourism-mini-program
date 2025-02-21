// eslint-disable-next-line import/no-mutable-exports
export let SUNNY_URI: string;
// eslint-disable-next-line import/no-mutable-exports
export let YGZJ_URI: string;
// eslint-disable-next-line import/no-mutable-exports
export let MCKJ_URI: string;
// eslint-disable-next-line import/no-mutable-exports
export let SUNNY_ADMIN_URI: string;

/**
 *
 * https://sunny-test.careduka.com/stat-api
 * https://sunny-test.careduka.com
 * https://sunny-test.careduka.com/user-api
 * https://ttt.yangguangzhujia.com/api
 */
// const env = envUtils.isTt() ? process.env.NODE_ENV : process.env.MC_APP_NODE_ENV
const env = process.env.NODE_ENV === 'development' ? process.env.NODE_ENV : process.env.MC_APP_NODE_ENV;
console.log('process.env.MC_APP_NODE_ENV', env);

switch (env) {
  // @ts-ignore
  case 'production':
  case 'prod':
    SUNNY_URI = 'https://sunny.careduka.com';
    YGZJ_URI = 'https://tta.yangguangzhujia.com';
    MCKJ_URI = 'https://manchengkj.com/tta';
    SUNNY_ADMIN_URI = 'https://sunny.careduka.com';
    break;
  case 'development':
  case 'test':
    SUNNY_URI = 'https://sunny-test.careduka.com';
    YGZJ_URI = 'https://ttt.yangguangzhujia.com';
    MCKJ_URI = 'https://manchengkj.com/ttt';
    SUNNY_ADMIN_URI = 'https://test.thousand-sunny.cn';

    // https://test.thousand-sunny.cn/api/v1/id-photo
    break;
}
