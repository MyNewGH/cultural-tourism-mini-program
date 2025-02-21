import { Image, ScrollView, Text, View } from '@tarojs/components';
import contentBg from '@/assets/images/content-bg.png';
import plate3 from '@/assets/images/plate3.png';
import localLife from '@/assets/images/local-life.png';
import question from '@/assets/images/question.png';
import HeaderSwiper from '@/components/headerSwiper';
import Info from '@/components/info';
import eye from '@/assets/images/eye.png';
import { godCoupons, news } from '@/pages/mine/config';
import { useState } from 'react';
import classNames from 'classnames';
function getCurrentDateRange(): string {
  const now = new Date();
  // 获取年、月、日
  const year = now.getFullYear();
  // 月份是从 0 开始计数的，所以要加 1
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  // 组合成所需的日期格式
  const dateString = `${year}.${month}.${day}`;

  // 拼接成日期范围格式
  return `${dateString}-${dateString}`;
}
const keys = ['天天神券', '生活优惠', '湾区消费券'];
const Home = () => {
  const [key, setKey] = useState<string>('天天神券');
  return (
    <View className="tw-bg-[#dde5e9] tw-h-screen tw-relative">
      <HeaderSwiper />
      <View className="tw-absolute tw-left-0 tw-top-0 tw-h-screen tw-pt-3.5 tw-box-border tw-flex tw-flex-col tw-w-full">
        <Info />
        <ScrollView
          scrollY
          className="tw-bg-cover tw-flex-1  tw-mt-2 tw-bg-no-repeat tw-p-1 tw-box-border"
          style={{ backgroundImage: `url(${contentBg})` }}
        >
          <View className="tw-flex tw-flex-col tw-p-1 tw-box-border tw-bg-cover tw-items-center" style={{ backgroundImage: `url(${plate3})` }}>
            <View
              className=" tw-w-[75%] tw-h-[28px] tw-bg-no-repeat tw-text-center tw-mt-0.5 tw-mb-1"
              style={{ backgroundImage: `url(${localLife})`, backgroundSize: '100%' }}
            >
              <Text className="tw-text-[#000] tw-text-[22px] tw-font-bold tw-leading-[22px]">U惠湾区</Text>
            </View>
            <View className="tw-bg-[#e7f0ff]  tw-p-[4px] tw-rounded-xl tw-w-[90%] tw-flex tw-justify-between">
              {keys.map((item, index) => {
                return (
                  <Text
                    key={index}
                    className={classNames(
                      'tw-flex-1 tw-h-[38px] tw-flex tw-items-center tw-justify-center tw-rounded-xl',
                      key === item ? 'tw-text-[#fff]' : 'tw-text-[#74757c]',
                    )}
                    style={{
                      background: key === item ? 'linear-gradient(138.67deg, rgb(91, 209, 255) 9.171%,rgb(67, 146, 255) 83.342%);' : 'transparent',
                    }}
                    onClick={() => setKey(item)}
                  >
                    {item}
                  </Text>
                );
              })}
            </View>
            <View className="tw-my-1 tw-flex tw-flex-col tw-gap-1 tw-w-full">
              {godCoupons.map((god, index) => {
                return (
                  <View
                    key={index}
                    style={{ backgroundImage: `url(${god.bg})`, backgroundSize: '100%' }}
                    className=" tw-w-full tw-flex  tw-h-[66px] "
                  >
                    <View className="tw-w-1/4 tw-flex tw-items-center tw-justify-center tw-h-full tw-gap-[2px]">
                      <Text className="tw-text-[14px] tw-text-[#FE4A3B] tw-pt-[5px]">¥</Text>
                      <Text className="tw-text-[24px] tw-text-[#FE4A3B]">{god.price}</Text>
                    </View>
                    <View className="tw-flex-1 tw-flex tw-items-center tw-pr-1">
                      <View className="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-start tw-gap-[6px]">
                        <Text className="tw-text-[#fff] tw-text-[16px] tw-leading-[14px] tw-ml-1">{god.name}</Text>
                        <Text className="tw-text-[#fff] tw-text-[12px] tw-leading-[10px] tw-ml-1 tw-opacity-80">{getCurrentDateRange()}</Text>
                        <Text className="tw-text-[#fff] tw-text-[14px] tw-leading-[11px] tw-ml-1 tw-opacity-80 tw-flex tw-items-center tw-gap-[4px]">
                          使用规则
                          <Image src={question} style={{ width: 16, height: 16 }} />
                        </Text>
                      </View>
                      <Text
                        style={{ background: 'linear-gradient(160.35deg, rgba(255, 255, 255, 0.19) 9.558%,rgba(255, 255, 255, 0.2) 71.393%);' }}
                        className="tw-text-[#fff] tw-px-1 tw-py-0.5 tw-rounded-md tw-border-solid tw-border-[#fff] tw-border-[1px]"
                      >
                        领取
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
          <View className="tw-mt-2 tw-bg-[#fff]  tw-flex tw-flex-col tw-p-1 tw-box-border tw-bg-cover tw-items-center tw-rounded">
            <View
              className=" tw-w-[75%] tw-h-[28px] tw-bg-no-repeat tw-text-center tw-mt-0.5"
              style={{ backgroundImage: `url(${localLife})`, backgroundSize: '100%' }}
            >
              <Text className="tw-text-[#000] tw-text-[22px] tw-font-bold tw-leading-[22px]">湾区咨询</Text>
            </View>
            <View className="tw-mt-1">
              {news.map((item, index) => {
                return (
                  <View key={index} className="tw-flex tw-justify-between tw-gap-2 tw-py-1">
                    <View>
                      <Text className="tw-text-[#000] tw-text-[14px]  tw-leading-[24px]">{item.title}</Text>
                      <View className="tw-flex tw-justify-between tw-mt-1">
                        <Text className="tw-text-[12px] tw-text-[#DEB797]">横琴微信公众号</Text>
                        <Text className="tw-text-[14px] tw-text-[#DEB797] tw-flex tw-items-center tw-justify-center tw-gap-0.5">
                          <Image src={eye} style={{ width: 12, height: 8 }} />
                          {item.watch}
                        </Text>
                      </View>
                    </View>
                    <Image src={item.bg} style={{ width: 90, height: 90 }} className="tw-rounded-sm tw-flex-shrink-0" />
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default Home;
