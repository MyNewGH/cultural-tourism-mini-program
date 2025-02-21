import Taro from '@tarojs/taro';

export const envType = Taro.getEnv();

export const promisify = (fn: (...originArgs: any) => void) => {
  return (...args: any) => {
    return new Promise((res, rej) => {
      fn({
        success: res,
        fail: rej,
        ...args,
      });
    });
  };
};

const miniApi = {
  envType,
  env: Taro.env, // 常量
  getEnterOptionsSync: Taro.getEnterOptionsSync, // 同步api，直接用
  getCurrentInstance: Taro.getCurrentInstance,
  getAccountInfoSync: Taro.getAccountInfoSync,
  createMapContext: Taro.createMapContext,
  getMenuButtonBoundingClientRect: Taro.getMenuButtonBoundingClientRect,
  getSystemInfoSync: Taro.getSystemInfoSync,
  canvasToTempFilePath: Taro.canvasToTempFilePath,
  getImageInfo: Taro.getImageInfo, // 可以Promise风格调用，直接用
  openLocation: Taro.openLocation, // 可以Promise风格调用，直接用
  shareFileMessage: Taro.shareFileMessage, // 可以Promise风格调用，直接用
  showToast: Taro.showToast, // 可以Promise风格调用，直接用
  hideToast: Taro.hideToast, // 可以Promise风格调用，直接用
  setStorageSync: Taro.setStorageSync,
  removeStorageSync: Taro.removeStorageSync,
  hideTabBar: Taro.hideTabBar,
  showTabBar: Taro.showTabBar,
  setNavigationBarTitle: Taro.setNavigationBarTitle,
  setNavigationBarColor: Taro.setNavigationBarColor,
  navigateToMiniProgram: Taro.navigateToMiniProgram,
  setTabBarBadge: Taro.setTabBarBadge,
  removeTabBarBadge: Taro.removeTabBarBadge,
  navigateTo: Taro.navigateTo,
  preload: Taro.preload,
  switchTab: Taro.switchTab,
  redirectTo: Taro.redirectTo,
  navigateBack: Taro.navigateBack,
  reLaunch: Taro.reLaunch,
  getStorage: Taro.getStorage,
  getStorageSync(key: string) {
    try {
      return Taro.getStorageSync(key);
    } catch {
      return null;
    }
  },
  uploadFile: Taro.uploadFile,
  setStorage: Taro.setStorage,
  removeStorage: Taro.removeStorage,
  showLoading: Taro.showLoading,
  showModal: Taro.showModal,
  hideLoading: Taro.hideLoading,
  requestPayment: Taro.requestPayment,
  previewImage: Taro.previewImage,
  saveImageToPhotosAlbum: Taro.saveImageToPhotosAlbum,
  openSetting: Taro.openSetting,
  downloadFile: Taro.downloadFile,
  getFileSystemManager: Taro.getFileSystemManager,
  makePhoneCall: Taro.makePhoneCall,
  login: promisify(Taro.login), // 官方没有Promise风格调用，需要包装一下
  // getFuzzyLocation: promisify(Taro.getFuzzyLocation), // 官方没有Promise风格调用，需要包装一下
  chooseImage: Taro.chooseImage,
  // chooseFile: chooseFile,
  createSelectorQuery: Taro.createSelectorQuery,
  nextTick: Taro.nextTick, // 这个函数如果用promise包裹，就失去原有意义
  pay: Taro.pay,
  createCanvasContext: Taro.createCanvasContext,
  getSetting: Taro.getSetting,
  createRewardedVideoAd: Taro.createRewardedVideoAd,
};

export default miniApi;
