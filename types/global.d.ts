/// <reference types="@tarojs/taro" />

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'prod' | 'test';
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd';
    TARO_APP_ID: string;
  }
}

declare class tt {
  static canIUse: any;
  static requestOrder: any;
  static getOrderPayment: any;
  static createCanvasContext: any;
  static canvasToTempFilePath: any;
  static downloadFile: any;
  static saveImageToPhotosAlbum: any;
}
declare namespace Taro {
  interface TaroStatic {
    pay: (option: {
      orderInfo: any;
      service: number;
      _debug?: boolean | number;
      success?: Function;
      fail?: Function;
    }) => Promise<TaroGeneral.CallbackResult>;
  }
  interface CameraContext {}
}
// declare namespace CameraContext {
//   interface TakePhotoSuccessCallbackResult {
//     height: string;
//     size: number;
//     tempImagePath: string;
//     width: string;
//   }
// }
