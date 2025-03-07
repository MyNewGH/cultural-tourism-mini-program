import new1 from '@/assets/images/new1.png';
import new2 from '@/assets/images/new2.png';
import new3 from '@/assets/images/new3.png';

function generateRandomNumber() {
  // 生成 1000 到 99999 之间的随机整数
  const min = 1000;
  const max = 99999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const news = [
  {
    title: '最新细则公布！这四大产业人才可申请澳门身份',
    bg: new1,
    watch: 2398,
  },
  {
    title: '高才通计划大学名单扩阔 新增八间顶尖内地和海外院校',
    bg: new2,
    watch: 1345,
  },
  {
    title: '2025香港优才计划不限额，如何申请?干货都在这里',
    bg: new3,
    watch: 4152,
  },
];
export const cityNews = {
  潮州: {
    history: news,
    play: [
      {
        title: '潮州凤凰山探险：山林间的神秘之旅！',
        bg: 'https://srgyrhbw.cn/image/image4.png',
        url: 'https://mp.weixin.qq.com/s/jm2hKJ16My2hIiegGnuo6w',
        watch: generateRandomNumber(),
      },
      {
        title: '广东十大最美古村落之一，龙湖古寨，堪称“潮州古建筑博览”',
        bg: 'https://srgyrhbw.cn/image/image5.png',
        url: 'https://www.163.com/dy/article/GN8H66EC054403AW.html',
        watch: generateRandomNumber(),
      },
    ],
    culture: news,
  },
  东莞: {
    history: news,
    play: news,
    culture: news,
  },
  佛山: {
    history: news,
    play: news,
    culture: news,
  },
  广州: {
    history: [
      {
        title: '触摸“千年城脉”，广州传统中轴线藏着哪些秘密？｜南方网',
        bg: 'https://srgyrhbw.cn/image/image1.png',
        url: 'https://news.southcn.com/node_54a44f01a2/75e83eae92.shtml',
        watch: generateRandomNumber(),
      },
    ],
    play: [],
    culture: [],
  },
  河源: {
    history: news,
    play: news,
    culture: news,
  },

  惠州: {
    history: news,
    play: [
      {
        title: '登顶罗浮山全攻略：自然与文化的双重盛宴',
        bg: 'https://srgyrhbw.cn/image/image16.png',
        url: 'https://baijiahao.baidu.com/s?id=1807255002901191346',
        watch: generateRandomNumber(),
      },
    ],
    culture: news,
  },
  江门: {
    history: news,
    play: [
      {
        title: '地胆推荐！台山最美自驾游路线全攻略就在这！吃喝玩乐靠它了！',
        bg: 'https://srgyrhbw.cn/image/image15.png',
        url: 'https://mp.weixin.qq.com/s/e9Zj06aBrO-VCdWOmAd0xg',
        watch: generateRandomNumber(),
      },
    ],
    culture: news,
  },
  揭阳: {
    history: news,
    play: news,
    culture: news,
  },
  茂名: {
    history: news,
    play: [
      {
        title: '入选“国字号”！高州甜美果海线路“火”了！',
        bg: 'https://srgyrhbw.cn/image/image8.png',
        url: 'https://m.thepaper.cn/baijiahao_20111576',
        watch: generateRandomNumber(),
      },
    ],
    culture: news,
  },
  梅州: {
    history: news,
    play: [
      {
        title: '梅州市蕉岭县长潭旅游区旅游攻略',
        bg: 'https://srgyrhbw.cn/image/image11.png',
        url: 'https://zhuanlan.zhihu.com/p/613068230',
        watch: generateRandomNumber(),
      },
      {
        title: '周末好去处！打卡不一样的丙村“范儿”',
        bg: 'https://srgyrhbw.cn/image/image12.png',
        url: 'https://baijiahao.baidu.com/s?id=1816137099346475619',
        watch: generateRandomNumber(),
      },
      {
        title: '雁南飞茶田里，踏青赏花正当时走，赴一场春的盛宴！',
        bg: 'https://srgyrhbw.cn/image/image13.png',
        url: 'https://mp.weixin.qq.com/s/0Iwh6iEX1KQ9Az3oebc3yQ',
        watch: generateRandomNumber(),
      },
      {
        title: '松口古镇游玩攻略，为你准备好，建议收藏分享',
        bg: 'https://srgyrhbw.cn/image/image14.png',
        url: 'https://baijiahao.baidu.com/s?id=1786477896915697580',
        watch: generateRandomNumber(),
      },
    ],
    culture: news,
  },
  清远: {
    history: news,
    play: [
      {
        title: '清远清明清新区旅游路线推荐',
        bg: 'https://srgyrhbw.cn/image/image10.png',
        url: 'https://qy.bendibao.com/tour/2024329/16665.shtm',
        watch: generateRandomNumber(),
      },
    ],
    culture: news,
  },
  深圳: {
    history: news,
    play: news,
    culture: news,
  },
  汕头: {
    history: [],
    play: [
      {
        title: '潮汕夏日最美海岛NO.1！比垦丁文艺，比厦门好吃！',
        bg: 'https://srgyrhbw.cn/image/image2.png',
        url: 'https://www.163.com/dy/article/J8LNTPGN0522VBTD.html',
        watch: generateRandomNumber(),
      },
    ],
    culture: [],
  },
  汕尾: {
    history: news,
    play: [
      {
        title: '一篇就够！汕尾红海湾旅游攻略全都在这儿',
        bg: 'https://srgyrhbw.cn/image/image3.png',
        url: 'https://www.shanwei.gov.cn/shanwei/swly/lyzs/content/post_1028219.html',
        watch: generateRandomNumber(),
      },
    ],
    culture: news,
  },
  韶关: {
    history: news,
    play: [
      {
        title: '韶关丹霞山：走进世界自然遗产的奇景',
        bg: 'https://srgyrhbw.cn/image/image9.png',
        url: 'https://baijiahao.baidu.com/s?id=1815605273292495944',
        watch: generateRandomNumber(),
      },
    ],
    culture: news,
  },
  阳江: {
    history: news,
    play: news,
    culture: news,
  },
  云浮: {
    history: news,
    play: news,
    culture: news,
  },
  湛江: {
    history: news,
    play: [
      {
        title: '频频上热搜的中国南极村——徐闻深度旅游攻略，附整体游玩路线',
        bg: 'https://srgyrhbw.cn/image/image6.png',
        url: 'https://baijiahao.baidu.com/s?id=1703083796166180406',
        watch: generateRandomNumber(),
      },
      {
        title: '徐闻菠萝又熟了~请收下这份“菠萝的海”旅游攻略',
        bg: 'https://srgyrhbw.cn/image/image7.png',
        url: 'https://www.sohu.com/a/307090556_674702',
        watch: generateRandomNumber(),
      },
    ],
    culture: news,
  },
  肇庆: {
    history: news,
    play: news,
    culture: news,
  },
  中山: {
    history: news,
    play: news,
    culture: news,
  },
  珠海: {
    history: news,
    play: news,
    culture: news,
  },
};

export const citys = [
  {
    title: 'C',
    lists: ['潮州'],
  },
  { title: 'D', lists: ['东莞'] },
  { title: 'F', lists: ['佛山'] },
  { title: 'G', lists: ['广州'] },
  { title: 'H', lists: ['河源', '惠州'] },
  { title: 'J', lists: ['江门', '揭阳'] },
  { title: 'M', lists: ['茂名', '梅州'] },
  { title: 'Q', lists: ['清远'] },
  { title: 'S', lists: ['深圳', '汕头', '汕尾', '韶关'] },
  { title: 'Y', lists: ['阳江', '云浮'] },
  { title: 'Z', lists: ['湛江', '肇庆', '中山', '珠海'] },
];
