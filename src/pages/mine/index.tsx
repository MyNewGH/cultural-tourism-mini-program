import { Image, ScrollView, Text, View } from '@tarojs/components';
import contentBg from '@/assets/images/content-bg.png';
import localLife from '@/assets/images/local-life.png';
import HeaderSwiper from '@/components/headerSwiper';
import Info from '@/components/info';
import eye from '@/assets/images/eye.png';
import { news } from '@/pages/mine/config';

const Home = () => {
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
