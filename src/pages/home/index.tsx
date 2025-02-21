import { Image, ScrollView, Text, View } from '@tarojs/components';
import contentBg from '@/assets/images/content-bg.png';
import plate1 from '@/assets/images/plate1.png';
import plate2 from '@/assets/images/plate2.png';
import activity from '@/assets/images/activity.png';
import localLife from '@/assets/images/local-life.png';
import { plateOne, plateTwo } from '@/pages/home/config';
import HeaderSwiper from '@/components/headerSwiper';
import Info from '@/components/info';
import { useState } from 'react';
import classNames from 'classnames';

const keys = ['港澳行', '羊城行'];
const Home = () => {
  const [key, setKey] = useState<string>('港澳行');

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
          <View className="tw-flex tw-flex-col tw-p-1 tw-box-border tw-bg-cover tw-items-center" style={{ backgroundImage: `url(${plate1})` }}>
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
                  <View key={index} className="tw-flex tw-flex-col tw-justify-between tw-items-center tw-w-full tw-mt-2 tw-gap-1">
                    <Image src={item.icon} style="width: 74px;height: 74px;" />
                    <Text className="tw-text-[#000] tw-text-[16px]">{item.name}</Text>
                  </View>
                );
              })}
            </View>
            <Image src={activity} className="tw-w-full tw-h-[60px] tw-rounded tw-mt-2" />
          </View>
          <View
            className="tw-mt-2 tw-flex tw-flex-col tw-p-1 tw-box-border tw-bg-cover tw-items-center"
            style={{ backgroundImage: `url(${plate2})` }}
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
                        <View key={index} className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-ful  tw-flex-1">
                          <Image
                            src={son.icon}
                            style={{
                              width: `28px`,
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
        </ScrollView>
      </View>
    </View>
  );
};
export default Home;
