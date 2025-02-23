import { Image, ScrollView, Text, View } from '@tarojs/components';
import contentBg from '@/assets/images/content-bg.png';
import plate1 from '@/assets/images/plate1.png';
import plate2 from '@/assets/images/plate2.png';
import activity from '@/assets/images/activity.png';
import localLife from '@/assets/images/local-life.png';
import { plateOne, plateTwo, godCoupons } from '@/pages/home/config';
import HeaderSwiper from '@/components/headerSwiper';
import Info from '@/components/info';
import { useState } from 'react';
import classNames from 'classnames';
import plate3 from '@/assets/images/plate3.png';
import question from '@/assets/images/question.png';
import { navigateToMiniProgramScheme } from '@/utils/navigateToScheme';

const keys = ['港澳行', '羊城行'];
const gods = ['天天神券', '生活优惠', '湾区消费券'];
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
const Home = () => {
  const [key, setKey] = useState<string>('港澳行');
  const [god, setGod] = useState<string>('天天神券');
  const handleClickOnePlate = (scheme?: string, appcode?: string) => {
    if (scheme) {
      navigateToMiniProgramScheme({
        scheme,
        success: (v: any) => {
          console.log(v);
        },
        fail: (data: any) => {
          console.log(data);
        },
      });
    } else {
      my.ap.openAlipayApp({
        appCode: appcode,
        appParams: {},
        success: () => {},
        fail: () => {},
      });
    }
  };
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
          <View
            className="tw-flex tw-flex-col tw-p-1 tw-box-border  tw-items-center"
            style={{ backgroundImage: `url(${plate1})`, backgroundSize: '100% 100%' }}
          >
            <View className="tw-bg-[#e7f0ff]  tw-p-[4px] tw-rounded-xl tw-w-1/2 tw-flex tw-justify-between">
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
                    onClick={() => {
                      setKey(item);
                    }}
                  >
                    {item}
                  </Text>
                );
              })}
            </View>
            <View className="tw-flex tw-justify-around  tw-w-full">
              {plateOne.map((item, index) => {
                return (
                  <View
                    key={index}
                    className="tw-flex tw-flex-col tw-justify-between tw-items-center tw-w-full tw-mt-2 tw-gap-1"
                    onClick={() => {
                      handleClickOnePlate(item.scheme, item.appCode);
                    }}
                  >
                    <Image src={item.icon} style="width: 74px;height: 74px;" />
                    <Text className="tw-text-[#000] tw-text-[16px]">{item.name}</Text>
                  </View>
                );
              })}
            </View>
            <Image src={activity} className="tw-w-full tw-h-[60px] tw-rounded tw-mt-2" />
          </View>
          <View
            className="tw-mt-2 tw-flex tw-flex-col tw-p-1 tw-box-border  tw-items-center"
            style={{ backgroundImage: `url(${plate2})`, backgroundSize: '100% 100%' }}
          >
            <View
              className=" tw-w-[75%] tw-h-[28px] tw-bg-no-repeat tw-text-center "
              style={{ backgroundImage: `url(${localLife})`, backgroundSize: '100%' }}
            >
              <Text className="tw-text-[#000] tw-text-[22px] tw-font-bold tw-leading-[22px]">本地生活</Text>
            </View>
            <View className="tw-flex tw-justify-around tw-w-full tw-bg tw-flex-col tw-bg-[#fff] tw-rounded tw-mt-1.5 tw-overflow-hidden">
              {Object.keys(plateTwo).map((item) => {
                return (
                  <View key={item} className="tw-flex tw-justify-between tw-items-center">
                    <Text
                      className="tw-text-[#fff] tw-h-[56px] tw-text-[14px] tw-flex-1 tw-flex-shrink-0 tw-items-center tw-flex tw-justify-center"
                      style={{ background: plateTwo[item].bg }}
                    >
                      {plateTwo[item].title}
                    </Text>
                    {plateTwo[item].list.map((son, index) => {
                      return (
                        <View
                          key={index}
                          className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-ful  tw-flex-1"
                          onClick={() => handleClickOnePlate(plateTwo[item].scheme)}
                        >
                          <Image
                            src={son.icon}
                            style={{
                              width: '28px',
                              height: `${son.height || 28}px`,
                              marginBottom: '4px',
                            }}
                          />
                          <Text className="tw-text-[#7f7f7f] tw-text-[12px]">{son.name}</Text>
                        </View>
                      );
                    })}
                  </View>
                );
              })}
            </View>
          </View>
          <View
            className="tw-mt-2 tw-flex tw-flex-col tw-p-1 tw-box-border tw-bg-cover tw-items-center"
            style={{ backgroundImage: `url(${plate3})`, backgroundSize: '100% 100%' }}
          >
            <View
              className=" tw-w-[75%] tw-h-[28px] tw-bg-no-repeat tw-text-center tw-mt-0.5 tw-mb-1"
              style={{ backgroundImage: `url(${localLife})`, backgroundSize: '100%' }}
            >
              <Text className="tw-text-[#000] tw-text-[22px] tw-font-bold tw-leading-[22px]">U惠湾区</Text>
            </View>
            <View className="tw-bg-[#e7f0ff]  tw-p-[4px] tw-rounded-xl tw-w-[90%] tw-flex tw-justify-between">
              {gods.map((item, index) => {
                return (
                  <Text
                    key={index}
                    className={classNames(
                      'tw-flex-1 tw-h-[38px] tw-flex tw-items-center tw-justify-center tw-rounded-xl',
                      god === item ? 'tw-text-[#fff]' : 'tw-text-[#74757c]',
                    )}
                    style={{
                      background: god === item ? 'linear-gradient(138.67deg, rgb(91, 209, 255) 9.171%,rgb(67, 146, 255) 83.342%);' : 'transparent',
                    }}
                    onClick={() => setGod(item)}
                  >
                    {item}
                  </Text>
                );
              })}
            </View>
            <View className="tw-my-1 tw-flex tw-flex-col tw-gap-1 tw-w-full">
              {godCoupons.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{ backgroundImage: `url(${item.bg})`, backgroundSize: '100%' }}
                    className=" tw-w-full tw-flex  tw-h-[66px] "
                    onClick={() => {
                      my.ap.navigateToAlipayPage({
                        path: 'https://render.alipay.com/p/s/i?appId=20000923',
                      });
                    }}
                  >
                    <View className="tw-w-1/4 tw-flex tw-items-center tw-justify-center tw-h-full tw-gap-[2px]">
                      <Text className="tw-text-[14px] tw-text-[#FE4A3B] tw-pt-[5px]">¥</Text>
                      <Text className="tw-text-[24px] tw-text-[#FE4A3B]">{item.price}</Text>
                    </View>
                    <View className="tw-flex-1 tw-flex tw-items-center tw-pr-1">
                      <View className="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-start tw-gap-[6px]">
                        <Text className="tw-text-[#fff] tw-text-[16px] tw-leading-[14px] tw-ml-1">{item.name}</Text>
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
        </ScrollView>
      </View>
    </View>
  );
};
export default Home;
