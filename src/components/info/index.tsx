import { Image, Text, View } from '@tarojs/components';
import close from '@/assets/images/close.png';
import zhifubaologo from '@/assets/images/zhifubaologo.png';
import hot from '@/assets/images/hot.png';
import { FC } from 'react';
import classNames from 'classnames';

const Info: FC<{ show: boolean }> = ({ show }) => {
  return (
    <>
      <View
        className={classNames(
          show ? 'animate-fade-out tw-fixed tw-left-0 tw-top-0 tw-bg-[#648ffe] tw-pt-4 tw-pb-1 tw-w-full tw-z-30' : 'tw-h-0 tw-overflow-hidden',
        )}
      >
        <View className=" tw-flex tw-items-center tw-gap-0.5 tw-px-2.5">
          <Text className="tw-text-[#fff] tw-text-[16px]">湾趣通</Text>
          <Image src={close} style="width: 10px;height: 10px;" />
          <Image src={zhifubaologo} style="width: 60px;height: 20px;" />
        </View>
      </View>
      <View className=" tw-flex tw-items-center tw-gap-0.5 tw-px-2.5">
        <Text className="tw-text-[#fff] tw-text-[16px]">湾趣通</Text>
        <Image src={close} style="width: 10px;height: 10px;" />
        <Image src={zhifubaologo} style="width: 60px;height: 20px;" />
      </View>
      <View className="tw-mt-10 tw-relative tw-flex tw-flex-col tw-gap-0.5 tw-px-2.5 tw-w-max">
        <Text className="tw-text-[#fff] tw-text-[40px]">羊城专区</Text>
        <Image src={hot} className="tw-absolute tw-w-3 tw-h-1.5 tw-right-4 tw-top-1.5" />
        <Text className="tw-text-[#fff] tw-text-[22px]">带你玩转粤港澳大湾区</Text>
      </View>
    </>
  );
};
export default Info;
