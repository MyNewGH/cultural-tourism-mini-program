import { Swiper, SwiperItem, View } from '@tarojs/components';
import banner1 from '@/assets/images/banner.png';
import banner2 from '@/assets/images/banner2.png';
import banner3 from '@/assets/images/banner3.png';

const HeaderSwiper = () => {
  return (
    <Swiper className="test-h" autoplay>
      <SwiperItem>
        <View className="tw-w-full tw-h-[430px] tw-bg-cover" style={{ backgroundImage: `url(${banner1})` }}></View>
      </SwiperItem>
      <SwiperItem>
        <View className="tw-w-full tw-h-[430px] tw-bg-cover" style={{ backgroundImage: `url(${banner2})` }}></View>
      </SwiperItem>
      <SwiperItem>
        <View className="tw-w-full tw-h-[430px] tw-bg-cover" style={{ backgroundImage: `url(${banner3})` }}></View>
      </SwiperItem>
    </Swiper>
  );
};
export default HeaderSwiper;
