import Taro, { useUnload } from '@tarojs/taro';
import { useEffect, useRef, useState } from 'react';
import miniApi from '@/utils/miniApi';

class VideoAd {
  public static adInstance: VideoAd | null;

  public videoAd;

  constructor(adUnitId) {
    this.videoAd = miniApi.createRewardedVideoAd({
      adUnitId,
    });
  }

  // 单例模式
  public static getInstance(adUnitId) {
    if (!VideoAd.adInstance) {
      VideoAd.adInstance = new VideoAd(adUnitId);
    }

    return VideoAd.adInstance;
  }
}

interface VideoAdInstanceProps {
  adUnitId: string;
  closeHandler?: any;
}

interface VideoAdInstanceReturns {
  isCanMountAd: boolean;
  /** 展示广告 */
  show: () => void;
  /**
   * 解绑close事件
   * 事件会多次绑定，所以监听完必须解绑事件，下同
   * 如需触发onload事件，也需要加上解绑逻辑
   */
  offClose: () => void;
}

/**
 * 激励广告实例hooks
 * @param props
 * @returns { isCanMountAd, show, offClose }
 */
const useVideoAdInstance = (props: VideoAdInstanceProps): VideoAdInstanceReturns => {
  const { adUnitId, closeHandler } = props;
  const [isCanMountAd, setIsCanMountAd] = useState(true);
  const instance = useRef<VideoAd | null>();

  const handleOnLoad = () => {
    const systemInfo = miniApi.getSystemInfoSync();
    console.log(systemInfo);
    console.log('ad load');
    setIsCanMountAd(true);
    // 请求广告成功
  };

  const handleOnError = (_err) => {
    const systemInfo = miniApi.getSystemInfoSync();
    console.log(systemInfo);

    setIsCanMountAd(false);
    setIsCanMountAd(false);
    // if (!isIOSLite()) {

    // }
    instance.current?.videoAd.offError(handleOnError);
  };

  function initVideoAd() {
    instance.current = VideoAd.getInstance(adUnitId);
    const { videoAd } = instance.current as VideoAd;
    videoAd
      .load()
      .then(() => {
        handleOnLoad();
      })
      .catch(() => {
        setIsCanMountAd(false);
      });
    videoAd.onError(handleOnError);
  }

  function show() {
    if (instance.current) {
      Taro.showLoading();
      const { videoAd } = instance.current as VideoAd;
      videoAd
        .show()
        .then(() => {})
        .catch(() => {
          // @ts-ignore
          Taro.showToast({
            title: '发生错误啦~请稍后重试',
            icon: 'none',
          });
        });
      videoAd.onClose(closeHandler);
    }
  }

  function offClose() {
    if (instance.current && closeHandler) {
      Taro.hideLoading();
      const { videoAd } = instance.current as VideoAd;
      videoAd.offClose(closeHandler);
    }
  }

  useEffect(() => {
    initVideoAd();
  }, [initVideoAd]);

  useUnload(() => {
    VideoAd.adInstance = null;
    instance.current = null;
  });

  return { show, offClose, isCanMountAd };
};

export default useVideoAdInstance;
