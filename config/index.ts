import * as path from 'path';
import { UnifiedWebpackPluginV5 } from 'weapp-tailwindcss/webpack';

const config = {
  projectName: 'cultural-tourism',
  date: '2024-5-30',
  designWidth(input) {
    // @ts-ignore
    if (input?.file?.replace(/\+/g, '/').indexOf('@antmjs/vantui') > -1) {
      return 750;
    }
    return 375;
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
  },
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    375: 2 / 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  compiler: 'webpack5',
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          // selectorBlackList: [/van-/],
        },
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },

      webpackChain(chain) {
        chain.merge({
          plugin: {
            install: {
              plugin: new UnifiedWebpackPluginV5({
                rem2rpx: true,
              }),
              args: [{ appType: 'taro' }],
            },
          },
        });
      },
    },
    enableExtract: true,
    miniCssExtractPluginOption: {
      //忽略css文件引入顺序
      ignoreOrder: true,
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
