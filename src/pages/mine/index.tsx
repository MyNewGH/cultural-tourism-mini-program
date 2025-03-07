import { Image, Text, View, Block, ScrollView } from '@tarojs/components';
import contentBg from '@/assets/images/content-bg.png';
import localLife from '@/assets/images/local-life.png';
import local from '@/assets/images/local.png';
import HeaderSwiper from '@/components/headerSwiper';
import Info from '@/components/info';
import eye from '@/assets/images/eye.png';
import { cityNews, citys } from '@/pages/mine/config';
import { useState } from 'react';
import { IndexBar, IndexAnchor, Cell, Sticky } from '@antmjs/vantui';
import classNames from 'classnames';
import miniApi from '@/utils/miniApi';

const hotCity = ['广州', '深圳', '东莞'];
const Home = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [city, setCity] = useState<string>('广州');
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setVisible(!visible);
  };
  const handleSelect = (c: string) => {
    setCity(c);
    handleShow();
  };
  const handleClickWeb = (item: Record<string, any>) => {
    const { url, title } = item;
    if (url) {
      miniApi.navigateTo({
        url: `/pages/web/index?url=${url}&title=${title}`,
      });
    }
  };
  const handleScroll = (e: any) => {
    setShow(e.detail.scrollTop > 100);
  };
  return (
    <View className="tw-bg-[#dde5e9] tw-h-screen tw-relative">
      <HeaderSwiper />
      <ScrollView
        scrollY
        onScroll={handleScroll}
        className="tw-absolute tw-left-0 tw-top-0 tw-h-screen tw-pt-4 tw-box-border tw-flex tw-flex-col tw-w-full"
      >
        <Info show={show} />
        <View className="tw-bg-cover tw-flex-1  tw-mt-2 tw-bg-no-repeat tw-p-1 tw-box-border" style={{ backgroundImage: `url(${contentBg})` }}>
          <View className="tw-flex tw-items-center tw-gap-0.5 tw-pl-0.5" onClick={handleShow}>
            <Image src={local} style={{ width: 20, height: 20, flexShrink: 0, marginTop: 2 }} />
            <Text className="tw-text-[#515151] tw-text-[16px]">
              {city} {'>'}
            </Text>
          </View>
          <View className="tw-mt-1 tw-bg-[#fff]  tw-flex tw-flex-col tw-p-1 tw-box-border tw-bg-cover tw-items-center tw-rounded">
            <View
              className=" tw-w-[75%] tw-h-[28px] tw-bg-no-repeat tw-text-center tw-mt-0.5"
              style={{ backgroundImage: `url(${localLife})`, backgroundSize: '100%' }}
            >
              <Text className="tw-text-[#000] tw-text-[22px] tw-font-bold tw-leading-[22px]">地区历史</Text>
            </View>
            <View className="tw-mt-1">
              {cityNews[city]?.history?.map((item, index) => {
                return (
                  <View key={index} className="tw-flex tw-justify-between tw-gap-2 tw-py-1" onClick={() => handleClickWeb(item)}>
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
          <View className="tw-mt-1 tw-bg-[#fff]  tw-flex tw-flex-col tw-p-1 tw-box-border tw-bg-cover tw-items-center tw-rounded">
            <View
              className=" tw-w-[75%] tw-h-[28px] tw-bg-no-repeat tw-text-center tw-mt-0.5"
              style={{ backgroundImage: `url(${localLife})`, backgroundSize: '100%' }}
            >
              <Text className="tw-text-[#000] tw-text-[22px] tw-font-bold tw-leading-[22px]">游玩资讯</Text>
            </View>
            <View className="tw-mt-1">
              {cityNews[city]?.play?.map((item, index) => {
                return (
                  <View key={index} className="tw-flex tw-justify-between tw-gap-2 tw-py-1" onClick={() => handleClickWeb(item)}>
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
          <View className="tw-mt-1 tw-bg-[#fff]  tw-flex tw-flex-col tw-p-1 tw-box-border tw-bg-cover tw-items-center tw-rounded">
            <View
              className=" tw-w-[75%] tw-h-[28px] tw-bg-no-repeat tw-text-center tw-mt-0.5"
              style={{ backgroundImage: `url(${localLife})`, backgroundSize: '100%' }}
            >
              <Text className="tw-text-[#000] tw-text-[22px] tw-font-bold tw-leading-[22px]">文化故事</Text>
            </View>
            <View className="tw-mt-1">
              {cityNews[city]?.culture?.map((item, index) => {
                return (
                  <View key={index} className="tw-flex tw-justify-between tw-gap-2 tw-py-1" onClick={() => handleClickWeb(item)}>
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
        </View>
      </ScrollView>

      <View className=" tw-absolute tw-top-0  tw-h-screen tw-w-full tw-bg-[#fff] " style={{ display: visible ? 'block' : 'none' }}>
        <View className="tw-flex tw-flex-col tw-gap-1">
          <Sticky>
            <View
              className={classNames(
                'tw-text-[#000] tw-bg-[#fff] tw-text-[18px] tw-px-1  tw-pb-0.5 tw-font-bold tw-leading-[22px]',
                visible ? 'tw-pt-6' : 'tw-pt-3',
              )}
              onClick={handleShow}
            >
              {'<'} 返回
            </View>
          </Sticky>
          <View className="tw-p-1 tw-mt-7 tw-flex-col tw-flex tw-gap-1">
            <Text className="tw-text-[#333] tw-text-[18px] tw-font-bold tw-leading-[22px] ">选择城市</Text>
            <View className="tw-flex  tw-gap-1 tw-flex-wrap">
              {hotCity.map((item) => {
                return (
                  <Text
                    key={item}
                    onClick={() => handleSelect(item)}
                    className="tw-flex tw-bg-[#f6f6f6] tw-rounded tw-items-center tw-gap-1 tw-py-0.5 tw-px-2 tw-border-b tw-border-[#ccc]"
                  >
                    {item}
                  </Text>
                );
              })}
            </View>
          </View>
        </View>
        <IndexBar>
          {citys.map((item) => (
            <Block key={item.title}>
              <IndexAnchor index={item.title}></IndexAnchor>
              {item.lists.map((c) => (
                <Cell title={c} key={c} onClick={() => handleSelect(c)}></Cell>
              ))}
            </Block>
          ))}
        </IndexBar>
      </View>
    </View>
  );
};
export default Home;
