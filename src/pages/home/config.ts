import scan from '@/assets/images/scan.png';
import customs from '@/assets/images/customs.png';
import travel from '@/assets/images/travel.png';
import pay from '@/assets/images/pay.png';
import airTicket from '@/assets/images/air-ticket.png';
import trainTicket from '@/assets/images/train-ticket.png';
import hotel from '@/assets/images/hotel.png';
import homestay from '@/assets/images/homestay.png';
import mustEat from '@/assets/images/must-eat.png';
import localRecommendation from '@/assets/images/local-recommendation.png';
import chishenme from '@/assets/images/chishenme.png';
import groupBuying from '@/assets/images/group-buying.png';
import play from '@/assets/images/play.png';
import tiyandian from '@/assets/images/tiyandian.png';
import mustPlay from '@/assets/images/must-play.png';
import menpiao from '@/assets/images/menpiao.png';
import godCoupon1 from '@/assets/images/god-coupon1.png';
import godCoupon2 from '@/assets/images/god-coupon2.png';
import godCoupon3 from '@/assets/images/god-coupon3.png';
import godCoupon4 from '@/assets/images/god-coupon4.png';

export const plateOne = [
  {
    name: '扫一扫',
    icon: scan,
    appCode: 'alipayScan',
  },
  {
    name: '通关助手',
    icon: customs,
    scheme: 'alipays://platformapi/startapp?appId=2021003147644613',
  },
  {
    name: '出行',
    icon: travel,
    scheme: 'alipays://platformapi/startapp?appId=2021001153690963',
  },
  {
    name: '支付',
    icon: pay,
    appCode: 'payCode',
  },
];

export const plateTwo = {
  run: {
    title: '畅行湾区',
    bg: 'linear-gradient(180.00deg, rgb(255, 184, 139),rgb(238, 104, 93) 100%)',
    list: [
      {
        icon: airTicket,
        name: '机票',
        height: 20,
        code: 60000138,
      },
      {
        icon: trainTicket,
        name: '火车票',
        height: 20,
        code: 20000135,
      },
      { icon: hotel, name: '酒店', code: 20000155 },
      { icon: homestay, name: '民宿', code: 20000155 },
    ],
  },
  eat: {
    title: '食在湾区',
    bg: 'linear-gradient(180.00deg, rgb(96, 214, 255),rgb(87, 156, 251) 100%)',
    scheme: 'alipays://platformapi/startapp?appId=2018090761228828',
    list: [
      { icon: mustEat, name: '必吃榜' },
      { icon: localRecommendation, name: '当地推荐' },
      { icon: chishenme, name: '当地特色菜' },
      { icon: groupBuying, name: '团购优惠' },
    ],
  },
  play: {
    title: '畅游湾区',
    bg: 'linear-gradient(180.00deg, rgb(136, 169, 255),rgb(93, 124, 250) 100%)',
    scheme: 'alipays://platformapi/startapp?appId=2018081461095002',
    list: [
      { icon: play, name: '游玩攻略' },
      { icon: tiyandian, name: '特色体验' },
      { icon: mustPlay, name: '必玩榜' },
      { icon: menpiao, name: '景点门票' },
    ],
  },
};

export const godCoupons = [
  {
    name: '美食团购/点都德',
    bg: godCoupon1,
    rule: '',
    price: '30',
    code: 20000120,
  },
  {
    name: '电影/演出',
    rule: '',
    bg: godCoupon2,
    price: '20',
    code: 60000130,
  },
  {
    name: '景点/周边游',
    bg: godCoupon3,
    rule: '',
    price: '20',
    code: 60000147,
  },
  {
    name: '丽人/美发',
    rule: '',
    bg: godCoupon4,
    price: '70',
    code: 60000008,
  },
];
export const godScheme = 'alipays://platformapi/startapp?appId=2021004161614882';
