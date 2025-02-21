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

export const plateOne = [
  {
    name: '扫一扫',
    icon: scan,
  },
  {
    name: '通关助手',
    icon: customs,
  },
  {
    name: '出行',
    icon: travel,
  },
  {
    name: '支付',
    icon: pay,
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
      },
      {
        icon: trainTicket,
        name: '火车票',
        height: 20,
      },
      { icon: hotel, name: '酒店' },
      { icon: homestay, name: '民宿' },
    ],
  },
  eat: {
    title: '食在湾区',
    bg: 'linear-gradient(180.00deg, rgb(96, 214, 255),rgb(87, 156, 251) 100%)',
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
    list: [
      { icon: play, name: '游玩攻略' },
      { icon: tiyandian, name: '特色体验' },
      { icon: mustPlay, name: '必玩榜' },
      { icon: menpiao, name: '景点门票' },
    ],
  },
};
