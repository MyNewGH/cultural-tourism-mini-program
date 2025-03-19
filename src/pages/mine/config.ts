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

export const citys = [
  {
    title: '珠三角',
    lists: ['广州', '佛山', '深圳', '珠海', '江门', '惠州', '中山', '肇庆'],
  },
  { title: '粤东', lists: ['潮州', '汕尾', '汕头', '揭阳'] },
  { title: '粤西', lists: ['茂名', '湛江', '阳江', '云浮'] },
  { title: '粤北', lists: ['清远', '韶关', '河源', '梅州'] },
];

export const allCity = {
  广州: {
    history: [
      {
        title: '触摸“千年城脉”，广州传统中轴线藏着哪些秘密？｜南方网',
        bg: 'https://srgyrhbw.cn/images/image%20(0).png',
        url: 'https://news.southcn.com/node_54a44f01a2/75e83eae92.shtml',
        watch: generateRandomNumber(),
      },
      {
        title: '广州，一座富有革命传统的英雄城市',
        bg: 'https://srgyrhbw.cn/images/image%20(1).png',
        url: 'https://theory.southcn.com/node_4274ee5d35/6abb86c44a.shtml',
        watch: generateRandomNumber(),
      },
      {
        title: '城市轴线见证广州近现代史',
        bg: 'https://srgyrhbw.cn/images/image%20(2).png',
        url: 'https://www.peopleweekly.cn/html/2024/wenshi_1005/226258.html',
        watch: generateRandomNumber(),
      },
      {
        title: '广州11区尽展芳华 文旅融合出新彩 风姿绰约迎春来',
        bg: 'https://srgyrhbw.cn/images/image%20(3).png',
        url: 'https://www.gz.gov.cn/zt/gzlfzgzld/gzgzlfz/content/post_9937289.html',
        watch: generateRandomNumber(),
      },
    ],
    play: [
      {
        title: '广州岭南特色游：品味广府文化的深厚底蕴',
        bg: 'https://srgyrhbw.cn/images/image%20(4).png',
        url: 'https://www.163.com/dy/article/JH5LO56M0545OBHE.html',
        watch: generateRandomNumber(),
      },
      {
        title: '广州不花钱地铁直达，一日游闲逛好去处',
        bg: 'https://srgyrhbw.cn/images/image%20(5).png',
        url: 'https://news.qq.com/rain/a/20250226A046RK00',
        watch: generateRandomNumber(),
      },
    ],
    culture: [
      {
        title: '《白云山记》李氏：栉风沐雨数百载，弦歌不辍薪火传',
        bg: 'https://srgyrhbw.cn/images/image%20(6).png',
        url: 'https://www.by.gov.cn/gzjg/qwxcb/whcl/content/post_9890266.html',
        watch: generateRandomNumber(),
      },
      {
        title: '广东十大姓氏公布！“近代广州第一家族”是什么来历？你是名人后代吗？',
        bg: 'https://srgyrhbw.cn/images/image%20(7).png',
        url: 'https://www.thepaper.cn/newsDetail_forward_7295194',
        watch: generateRandomNumber(),
      },
    ],
  },
  佛山: {
    history: [
      {
        title: '佛山十大历史名人排行榜',
        bg: 'https://srgyrhbw.cn/images/image%20(8).png',
        url: 'https://www.phb123.com/renwu/lsrw/70126.html',
        watch: generateRandomNumber(),
      },
      {
        title: '【读懂广东】何以为佛山',
        bg: 'https://srgyrhbw.cn/images/image%20(9).png',
        url: 'https://www.peopleweekly.cn/html/2024/wenshi_1005/226258.html',
        watch: generateRandomNumber(),
      },
      {
        title: '佛山：一座历史与现代交织的城市',
        bg: 'https://srgyrhbw.cn/images/image%20(10).png',
        url: 'https://baijiahao.baidu.com/s?id=1786713119011372892',
        watch: generateRandomNumber(),
      },
    ],
    play: [
      {
        title: '佛山发布2025年“福喜”文旅IP与特色路线，700余项文旅活动嗨翻蛇年春节',
        bg: 'https://srgyrhbw.cn/images/image%20(11).png',
        url: 'https://www.21jingji.com/article/20250110/herald/a49fae3c3f4157b8d22955cd6a640013.html',
        watch: generateRandomNumber(),
      },
      {
        title: '品读岭南 | 佛山十大传统文化之美食',
        bg: 'https://srgyrhbw.cn/images/image%20(12).png',
        url: 'https://www.sohu.com/a/758090214_121123736',
        watch: generateRandomNumber(),
      },
      {
        title: '从“四山两江”读懂佛山的文旅大谋略',
        bg: 'https://srgyrhbw.cn/images/image%20(13).png',
        url: 'https://epaper.nfnews.com/nfdaily/html/202502',
        watch: generateRandomNumber(),
      },
      {
        title: '揭秘佛山三关家族：传承千年的家族故事与智慧',
        bg: 'https://srgyrhbw.cn/images/image%20(14).png',
        url: 'https://www.bkwk.cn/article/jmfsssgsccqndjzgsyzh.html',
        watch: generateRandomNumber(),
      },
    ],
    culture: [
      {
        title: '道光佛山第一家族——大树堂吴氏',
        bg: 'https://srgyrhbw.cn/images/image%20(15).png',
        url: 'https://bj.crntt.com/crn-webapp/cbspub/secDetail.jsp?bookid=37666&secid=37674',
        watch: generateRandomNumber(),
      },
    ],
  },
  深圳: {
    history: [
      {
        title: '改革开放40周年 | 从一个小渔村到大都市：一座城的变与不变',
        bg: 'https://srgyrhbw.cn/images/image%20(16).png',
        url: 'https://www.thepaper.cn/newsDetail_forward_2235988',
        watch: generateRandomNumber(),
      },
      {
        title: '深圳历史风貌区探秘：探寻城市文化的独特印记',
        bg: 'https://srgyrhbw.cn/images/image%20(17).png',
        url: 'https://baijiahao.baidu.com/s?id=1821078530840615989',
        watch: generateRandomNumber(),
      },
      {
        title: '广东省深圳市历史六大名人，你知道深圳市的哪些名人？',
        bg: 'https://srgyrhbw.cn/images/image%20(18).png',
        url: 'https://baijiahao.baidu.com/s?id=1671889721738167981',
        watch: generateRandomNumber(),
      },
    ],
    play: [
      {
        title: '深圳旅游攻略：探索鹏城魅力，开启精彩之旅',
        bg: 'https://srgyrhbw.cn/images/image%20(19).png',
        url: 'https://hainiao.net/tips/shenzhen',
        watch: generateRandomNumber(),
      },
      {
        title: '深圳传统文化大盘点',
        bg: 'https://srgyrhbw.cn/images/image%20(20).png',
        url: 'https://zhuanlan.zhihu.com/p/616469621',
        watch: generateRandomNumber(),
      },
      {
        title: '深圳美食推荐！40间地铁沿线，必吃火锅/粤菜/网红店',
        bg: 'https://srgyrhbw.cn/images/image%20(21).png',
        url: 'https://www.stnn.cc/c/2024-05-11/3893060.shtml',
        watch: generateRandomNumber(),
      },
    ],
    culture: [
      {
        title: '《家风家训》深圳平湖刘氏族家：书香传家修身立世',
        bg: 'https://srgyrhbw.cn/images/image%20(22).png',
        url: 'https://www.sohu.com/a/222385040_99904027',
        watch: generateRandomNumber(),
      },
      {
        title: '【廉水流深】龙窝凌氏诗书传家 后世族人贡献卓著',
        bg: 'https://srgyrhbw.cn/images/image%20(23).png',
        url: 'http://www.ljsz.gov.cn/lzwh/lsls/content/post_60572.html',
        watch: generateRandomNumber(),
      },
    ],
  },
  汕头: {
    history: [
      {
        title: '回望来路☞｜在被遗忘和被压缩之外，关于汕头的几重叙事',
        bg: 'https://srgyrhbw.cn/images/image%20(24).png',
        url: 'https://www.thepaper.cn/newsDetail_forward_22746283',
        watch: generateRandomNumber(),
      },
      {
        title: '辛亥革命时期的潮汕华侨',
        bg: 'https://srgyrhbw.cn/images/image%20(25).png',
        url: 'http://www.hnyhw.org.cn/newscontent_nor.aspx?channel_id=12&id=1531&m=a0',
        watch: generateRandomNumber(),
      },
      {
        title: '广东省汕头市历史沿革',
        bg: 'https://srgyrhbw.cn/images/image%20(26).png',
        url: 'http://www.tcmap.com.cn/guangdong/shantoushi_history.html',
        watch: generateRandomNumber(),
      },
    ],
    play: [
      {
        title: '潮汕夏日最美海岛NO.1！比是文艺，比厦门好吃！',
        bg: 'https://srgyrhbw.cn/images/image%20(27).png',
        url: 'https://www.163.com/dy/article/J8LNTPGN0522VBTD.html',
        watch: generateRandomNumber(),
      },
      {
        title: '品味汕头：不可错过的十大美食',
        bg: 'https://srgyrhbw.cn/images/image%20(28).png',
        url: 'https://baijiahao.baidu.com/s?id=1824541865710471202',
        watch: generateRandomNumber(),
      },
      {
        title: '引客来，留客心！打造城市文旅名片，汕头一直在行动......',
        bg: 'https://srgyrhbw.cn/images/image%20(29).png',
        url: 'https://m.thepaper.cn/baijiahao_25906130',
        watch: generateRandomNumber(),
      },
    ],
    culture: [
      {
        title: '揭秘汕头陈家：百年传奇，解码潮汕家族智慧',
        bg: 'https://srgyrhbw.cn/images/image%20(30).png',
        url: 'https://www.bkwk.cn/article/jmstcjbnccjmcsjzzh.html',
        watch: generateRandomNumber(),
      },
      {
        title: '探寻汕头月浦余氏：家族传承与城市发展中的文化足迹',
        bg: 'https://srgyrhbw.cn/images/image%20(31).png',
        url: 'https://www.bkwk.cn/article/txstypssjzccycsfzzdwhzj.html',
        watch: generateRandomNumber(),
      },
    ],
  },
  汕尾: {
    history: [
      {
        title: '汕尾十大历史人物榜中榜',
        bg: 'https://srgyrhbw.cn/images/image%20(32).png',
        url: 'https://www.bang.cn/top10/23401.html',
        watch: generateRandomNumber(),
      },
      {
        title: '解密汕尾设市历程及市区选址汕尾镇的缘由',
        bg: 'https://srgyrhbw.cn/images/image%20(33).png',
        url: 'https://www.163.com/dy/article/FPD2Q21K05434G9P.html',
        watch: generateRandomNumber(),
      },
      {
        title: '广东汕尾：红色革命旧址成党史学习教育实践基地',
        bg: 'https://srgyrhbw.cn/images/image%20(34).png',
        url: 'https://www.shanwei.gov.cn/shanwei/swly/hsly/content/post_675369.html',
        watch: generateRandomNumber(),
      },
    ],
    play: [
      {
        title: '一篇就够！汕尾红海湾旅游攻略全都在这儿',
        bg: 'https://srgyrhbw.cn/images/image%20(35).png',
        url: 'https://www.shanwei.gov.cn/shanwei/swly/lyzs/content/post_1028219.html',
        watch: generateRandomNumber(),
      },
      {
        title: '十大汕尾特色美食小吃排行',
        bg: 'https://srgyrhbw.cn/images/image%20(36).png',
        url: 'https://www.maigoo.com/top/426686.html',
        watch: generateRandomNumber(),
      },
      {
        title: '汕尾旅游景点攻略（广东汕尾旅游必去十大景点）',
        bg: 'https://srgyrhbw.cn/images/image%20(37).png',
        url: 'https://www.hanpokou.com/guide/shanweilvyou/',
        watch: generateRandomNumber(),
      },
    ],
    culture: [
      {
        title: '汕尾庐江何氏：揭秘岭南何氏家族的传承故事与当代发展',
        bg: 'https://srgyrhbw.cn/images/image%20(38).png',
        url: 'https://www.bkwk.cn/article/swljhsjmlnhsjzdccgsyddfz.html',
        watch: generateRandomNumber(),
      },
      {
        title: '汕尾市林群生：揭秘林氏家族的传奇故事与汕尾发展脉络',
        bg: 'https://srgyrhbw.cn/images/image%20(39).png',
        url: 'https://www.bkwk.cn/article/swslqsjmlsjzdcqgsyswfzml.html',
        watch: generateRandomNumber(),
      },
    ],
  },
  潮州: {
    history: [
      {
        title: '深挖历史文化资源的时代内涵：“宋末三杰”忠义精神在潮州的传承',
        bg: 'https://srgyrhbw.cn/images/image%20(40).png',
        url: 'https://www.chaozhoudaily.com/content/202408/20/c26017278.html',
        watch: generateRandomNumber(),
      },
      {
        title: '盘点潮州十大古代名人',
        bg: 'https://srgyrhbw.cn/images/image%20(41).png',
        url: 'https://www.maigoo.com/top/407340.html',
        watch: generateRandomNumber(),
      },
      {
        title: '一文看懂重温潮州的前世今生',
        bg: 'https://srgyrhbw.cn/images/image%20(42).png',
        url: 'https://www.gdwsw.gov.cn/shsy/content/post_25823.html',
        watch: generateRandomNumber(),
      },
    ],
    play: [
      {
        title: '潮州凤凰山探险：山林间的神秘之旅！',
        bg: 'https://srgyrhbw.cn/images/image%20(43).png',
        url: 'https://mp.weixin.qq.com/s/jm2hKJ16My2hIiegGnuo6w',
        watch: generateRandomNumber(),
      },
      {
        title: '广东十大最美古村落之一，龙湖古寨，堪称“潮州古建筑博览”',
        bg: 'https://srgyrhbw.cn/images/image%20(44).png',
        url: 'https://www.163.com/dy/article/GN8H66EC054403AW.html',
        watch: generateRandomNumber(),
      },
      {
        title: '盘点潮州人最好吃的10家特色餐馆，排队也要吃，你吃过几家？',
        bg: 'https://srgyrhbw.cn/images/image%20(45).png',
        url: 'https://baijiahao.baidu.com/s?id=1810156221746698226',
        watch: generateRandomNumber(),
      },
    ],
    culture: [
      {
        title: '两大家族四代潮人奋斗史！陈崇正转型力作《归潮》深情感敬故乡',
        bg: 'https://srgyrhbw.cn/images/image%20(46).png',
        url: 'https://www.xkb.com.cn/articleDetail/307958',
        watch: generateRandomNumber(),
      },
      {
        title: '潮州祠堂：历史的见证与家族的传承',
        bg: 'https://srgyrhbw.cn/images/image%20(47).png',
        url: 'https://www.sohu.com/a/850217777_122006510',
        watch: generateRandomNumber(),
      },
    ],
  },
  揭阳: {
    history: [
      {
        title: '【揭阳风情】揭阳历史三字经',
        bg: 'https://srgyrhbw.cn/images/image%20(48).png',
        url: 'http://www.jieyang.gov.cn/xwdt/jyxw/content/post_92871.html',
        watch: generateRandomNumber(),
      },
      {
        title: '揭阳市名人录',
        bg: 'https://srgyrhbw.cn/images/image%20(49).png',
        url: 'http://famous.usatour.com.cn/celebrity/index309.html',
        watch: generateRandomNumber(),
      },
      {
        title: '揭阳学宫：周恩来三次下榻，点燃革命之火',
        bg: 'https://srgyrhbw.cn/images/image%20(50).png',
        url: 'http://www.jieyang.gov.cn/xwdt/jyxw/content/post_789366.html',
        watch: generateRandomNumber(),
      },
    ],
    play: [
      {
        title: '踏青游春 —— 广东春季自驾精品线路之揭阳篇',
        bg: 'https://srgyrhbw.cn/images/image%20(51).png',
        url: 'http://www.jieyang.gov.cn/zgb/lyjy/content/post_841207.html',
        watch: generateRandomNumber(),
      },
      {
        title: '10道最出名的揭阳传统名菜盘点',
        bg: 'https://srgyrhbw.cn/images/image%20(52).png',
        url: 'https://www.maigoo.com/top/426189.html',
        watch: generateRandomNumber(),
      },
      {
        title: '揭阳旅游必去十大景点（揭阳旅游景点大全排名介绍）',
        bg: 'https://srgyrhbw.cn/images/image%20(53).png',
        url: 'https://www.hanpokou.com/spot/jieyanglvyou/',
        watch: generateRandomNumber(),
      },
    ],
    culture: [
      {
        title: '文化中国行丨揭阳黄氏：潜光隐德 淡看功名',
        bg: 'https://srgyrhbw.cn/images/image%20(54).png',
        url: 'https://news.cctv.com/2025/01/22/ARTISqtdijaqh2hw1cdpRRa1250122.shtml',
        watch: generateRandomNumber(),
      },
      {
        title: '了解潮汕林氏，揭阳揭东、揭西、榕城区历来有“林半县之称',
        bg: 'https://srgyrhbw.cn/images/image%20(55).png',
        url: 'https://www.sohu.com/a/207385714_100049696',
        watch: generateRandomNumber(),
      },
    ],
  },
  湛江: {
    history: [
      {
        title: '了解湛江，湛江解放70周年有很多故事！你知道吗？',
        bg: 'https://srgyrhbw.cn/images/image%20(56).png',
        url: 'https://www.sohu.com/a/361546915_533571',
        watch: generateRandomNumber(),
      },
      {
        title: '黄花岗七十二烈士名扬天下，其中有一位湛江人，知道的人却很少',
        bg: 'https://srgyrhbw.cn/images/image%20(57).png',
        url: 'https://ishare.ifeng.com/c/s/7khFM7OmDju',
        watch: generateRandomNumber(),
      },
      {
        title: '湛江：一寸山河一寸金',
        bg: 'https://srgyrhbw.cn/images/image%20(58).png',
        url: 'https://www.nfzz.net.cn/node_f3ac47f180/92f0f405ae.shtml',
        watch: generateRandomNumber(),
      },
    ],
    play: [
      {
        title: '频频上热搜的中国南极村——徐闻深度旅游攻略，附整体游玩路线',
        bg: 'https://srgyrhbw.cn/images/image%20(59).png',
        url: 'https://baijiahao.baidu.com/s?id=1703083796166180406',
        watch: generateRandomNumber(),
      },
      {
        title: '徐闻菠萝又熟了~请收下这份“菠萝的海”旅游攻略',
        url: 'https://www.sohu.com/a/307090556_674702',
        bg: 'https://srgyrhbw.cn/images/image%20(60).png',
        watch: generateRandomNumber(),
      },
      {
        title: '游遍中华寻美食（广东）——湛江市十大美食',
        bg: 'https://srgyrhbw.cn/images/image%20(61).png',
        url: 'https://baijiahao.baidu.com/s?id=1777065513099220165',
        watch: generateRandomNumber(),
      },
    ],
    culture: [
      {
        title: '湛江全氏祭祖：探寻粤西千年家族文化的传承之谜',
        bg: 'https://srgyrhbw.cn/images/image%20(62).png',
        url: 'https://www.bkwk.cn/article/zjqsjztxyxqnjzwhdcczm.html',
        watch: generateRandomNumber(),
      },
      {
        title: '揭秘湛江：尹氏家族传奇，探寻粤西百年风云史',
        bg: 'https://srgyrhbw.cn/images/image%20(63).png',
        url: 'https://www.bkwk.cn/article/jmzjysjzcqtxyxbnfys.html',
        watch: generateRandomNumber(),
      },
    ],
  },
  茂名: {
    history: [
      {
        title: '茂名三变：从南路小镇到石油基地，从城市伤疤到湖光绿染',
        bg: 'https://srgyrhbw.cn/images/image%20(64).png',
        url: 'https://www.gdszx.gov.cn/tj/lnws/content/post_25538.html',
        watch: generateRandomNumber(),
      },
      {
        title: '【看看茂名发展】茂名的前世今生',
        bg: 'https://srgyrhbw.cn/images/image%20(65).png',
        url: 'https://static.nfnews.com/content/202410/02/c10137409.html',
        watch: generateRandomNumber(),
      },
      {
        title: '茂名人一定要知道的20位历史名人',
        bg: 'https://srgyrhbw.cn/images/image%20(66).png',
        url: 'https://news.qq.com/rain/a/20220810A05W0600',
        watch: generateRandomNumber(),
      },
    ],
    play: [
      {
        title: '入选“国字号”！高州甜美黑海线路“火”了！',
        bg: 'https://srgyrhbw.cn/images/image%20(67).png',
        url: 'https://m.thepaper.cn/baijiahao_20111576',
        watch: generateRandomNumber(),
      },
      {
        title: '探寻南海之滨的宝藏城市，在中国第一滩感受南海风情',
        bg: 'https://srgyrhbw.cn/images/image%20(68).png',
        url: 'https://hainiao.net/tips/maoming',
        watch: generateRandomNumber(),
      },
      {
        title: '广东茂名著名的十大名菜',
        bg: 'https://srgyrhbw.cn/images/image%20(69).png',
        url: 'https://www.qmbkw.com/zhishi/409990.html',
        watch: generateRandomNumber(),
      },
    ],
    culture: [
      {
        title: '茂名胜迹：揭秘茂名地区张姓家族的传奇故事与当代挑战',
        bg: 'https://srgyrhbw.cn/images/image%20(70).png',
        url: 'https://www.bkwk.cn/article/mmzjmmmdqzxjzdcqgsyddtz.html',
        watch: generateRandomNumber(),
      },
      {
        title: '茂名赖姓家族传奇：揭秘一个姓氏背后的历史与传承',
        bg: 'https://srgyrhbw.cn/images/image%20(71).png',
        url: 'https://www.bkwk.cn/article/mmlxjzcqjmygxsbhdlsycc.html',
        watch: generateRandomNumber(),
      },
    ],
  },
  阳江: {
    history: [
      {
        title: '一把刀 认识一座城，古城阳江如何锻造千年“刀魂”？ | 阳江历史文化行',
        bg: 'https://srgyrhbw.cn/images/image%20(72).png',
        url: 'https://static.nfnews.com/content/202408/15/c9658978.html',
        watch: generateRandomNumber(),
      },
      {
        title: '阳江古城①：一城古韵，如何点亮千年文脉的时代风华？｜阳江历史文化行 ',
        bg: 'https://srgyrhbw.cn/images/image%20(73).png',
        url: 'https://www.sohu.com/a/802235642_121106875',
        watch: generateRandomNumber(),
      },
      {
        title: '阳江古城②：红色故事与“阳江三宝”的文化印记 | 阳江历史文化行 ',
        bg: 'https://srgyrhbw.cn/images/image%20(74).png',
        url: 'https://www.sohu.com/a/802235642_121106875',
        watch: generateRandomNumber(),
      },
    ],
    play: [
      {
        title: '舌尖上的阳江：十二道阳江美食大合集，你都吃过没？',
        bg: 'https://srgyrhbw.cn/images/image%20(75).png',
        url: 'https://k.sina.cn/article_6432527656_17f689528001003iv8.html',
        watch: generateRandomNumber(),
      },
      {
        title: '广东阳江必去十大景点排行榜，阳江10个周边游好去处',
        bg: 'https://srgyrhbw.cn/images/image%20(76).png',
        url: 'https://www.thepaper.cn/newsDetail_forward_27196646',
        watch: generateRandomNumber(),
      },
      {
        title: '民俗中的年味——阳江粉酥',
        bg: 'https://srgyrhbw.cn/images/image%20(77).png',
        url: 'http://www.yangjiang.gov.cn/zjyj/rwls/msfq/content/post_765370.html',
        watch: generateRandomNumber(),
      },
    ],
    culture: [
      {
        title: '阳江市左章高：揭秘左氏家族的传奇传承与未来展望',
        bg: 'https://srgyrhbw.cn/images/image%20(78).png',
        url: 'https://www.bkwk.cn/article/yjszzgjmzsjzdcqccywlzw.html',
        watch: generateRandomNumber(),
      },
      {
        title: '揭秘阳江同姓：传承与创新的家族故事',
        bg: 'https://srgyrhbw.cn/images/image%20(79).png',
        url: 'https://www.bkwk.cn/article/jmyjkxccycxdjzgs.html',
        watch: generateRandomNumber(),
      },
    ],
  },
  云浮: {
    history: [
      {
        title: '云浮：三十而励 争先进位',
        bg: 'https://srgyrhbw.cn/images/image%20(80).png',
        url: 'https://www.yunfu.gov.cn/nyncj/zdht/sy/nyxw/content/post_1857973.html',
        watch: generateRandomNumber(),
      },
      {
        title: '这10本“秘笈”，带你全面了解云浮历史文化！',
        bg: 'https://srgyrhbw.cn/images/image%20(81).png',
        url: 'https://m.thepaper.cn/baijiahao_13627127',
        watch: generateRandomNumber(),
      },
      {
        title: '文史博览 | 细数云浮风云人物',
        bg: 'https://srgyrhbw.cn/images/image%20(82).png',
        url: 'https://www.gdwsw.gov.cn/qsws/content/post_33183.html',
        watch: generateRandomNumber(),
      },
    ],
    play: [
      {
        title: '云浮美食盘点：不可错过的六大特色佳肴，你吃过几种？',
        bg: 'https://srgyrhbw.cn/images/image%20(83).png',
        url: 'https://www.163.com/dy/article/IL7GKHND0552RPJR.html',
        watch: generateRandomNumber(),
      },
      {
        title: '云浮郁南：南江文化魅力绽放 文旅经济活力迸发',
        bg: 'https://srgyrhbw.cn/images/image%20(84).png',
        url: 'https://m.itouchtv.cn/article/066525e1e45b3ee4e88c374209d91851',
        watch: generateRandomNumber(),
      },
      {
        title: '广东云浮十大景点有哪些？自驾游玩如何规划行程路线？',
        bg: 'https://srgyrhbw.cn/images/image%20(85).png',
        url: 'https://baijiahao.baidu.com/s?id=1705738613481684103',
        watch: generateRandomNumber(),
      },
    ],
    culture: [
      {
        title: '云浮荣星堂余氏一门七杰投身革命，红色家风代代相传',
        bg: 'https://srgyrhbw.cn/images/image%20(86).png',
        url: 'https://baijiahao.baidu.com/s?id=1785947453711154016',
        watch: generateRandomNumber(),
      },
      {
        title: '云浮市30部家谱，看看你家族是否在列？',
        bg: 'https://srgyrhbw.cn/images/image%20(87).png',
        url: 'https://baijiahao.baidu.com/s?id=1780606609057998591',
        watch: generateRandomNumber(),
      },
    ],
  },
  韶关: {
    history: [
      {
        title: '红色韶关党史故事 | 从犁铺头到井冈山',
        bg: 'https://srgyrhbw.cn/images/image%20(88).png',
        url: 'https://m.thepaper.cn/baijiahao_13322463',
        watch: generateRandomNumber(),
      },
      {
        title: '谢弥坚韶关：揭秘韶关历史名人的传奇人生',
        bg: 'https://srgyrhbw.cn/images/image%20(89).png',
        url: 'https://www.bkwk.cn/article/xmjsgjmsglsmrdcqrs.html',
        watch: generateRandomNumber(),
      },
      {
        title: '红军长征经过的韶关小镇，至今流传着一个动人的故事',
        bg: 'https://srgyrhbw.cn/images/image%20(90).png',
        url: 'https://static.nfapp.southcn.com/content/201802/07/c957597.html',
        watch: generateRandomNumber(),
      },
    ],
    play: [
      {
        title: '韶关丹霞山：走进世界自然遗产的奇景',
        bg: 'https://srgyrhbw.cn/images/image%20(91).png',
        url: 'https://baijiahao.baidu.com/s?id=1815605273292495944',
        watch: generateRandomNumber(),
      },
      {
        title: '从舞龙看韶关多彩节庆文化',
        bg: 'https://srgyrhbw.cn/images/image%20(92).png',
        url: 'https://www.sg.gov.cn/sq/lsrw/mzms/content/post_2508064.html',
        watch: generateRandomNumber(),
      },
      {
        title: '“岭南名郡”韶关十大特色美食，老韶关都未必全吃过！你吃过几道',
        bg: 'https://srgyrhbw.cn/images/image%20(93).png',
        url: 'https://baijiahao.baidu.com/s?id=1786328017749144259',
        watch: generateRandomNumber(),
      },
    ],
    culture: [
      {
        title: '韶关张姓家族：揭秘千年传承的智慧与力量',
        bg: 'https://srgyrhbw.cn/images/image%20(94).png',
        url: 'https://www.bkwk.cn/article/sgzxjzjmqnccdzhyll.html',
        watch: generateRandomNumber(),
      },
      {
        title: '韶关人母系溯源：揭秘家族传承的神秘力量',
        bg: 'https://srgyrhbw.cn/images/image%20(95).png',
        url: 'https://www.bkwk.cn/article/sgrmxsyjmjzccdsmll.html',
        watch: generateRandomNumber(),
      },
    ],
  },
  清远: {
    history: [
      {
        title: '岳飞也来过清远？6位历史名人在清远的足迹',
        bg: 'https://srgyrhbw.cn/images/image%20(96).png',
        url: 'https://static.nfapp.southcn.com/content/201802/07/c957597.html',
        watch: generateRandomNumber(),
      },
      {
        title: '「广东清远市的名人故事」广东清远历史名人',
        bg: 'https://srgyrhbw.cn/images/image%20(97).png',
        url: 'https://www.mrgsw.com/ty/18180.html',
        watch: generateRandomNumber(),
      },
      {
        title: '【读懂广东】何为清远',
        bg: 'https://srgyrhbw.cn/images/image%20(98).png',
        url: 'https://www.gdwsw.gov.cn/qsws/content/post_29206.html',
        watch: generateRandomNumber(),
      },
    ],
    play: [
      {
        title: '清远清新区旅游路线推荐',
        bg: 'https://srgyrhbw.cn/images/image%20(99).png',
        url: 'https://qy.bendibao.com/tour/2024329/16665.shtm',
        watch: generateRandomNumber(),
      },
      {
        title: '广东清远民俗节日排行榜',
        bg: 'https://srgyrhbw.cn/images/image%20(100).png',
        url: 'https://www.bendi5.com/qingyuan/minsujieri.html',
        watch: generateRandomNumber(),
      },
      {
        title: '广东清远最有名的8大特色美食，倒数第二道因奇特的味道而出名',
        bg: 'https://srgyrhbw.cn/images/image%20(101).png',
        url: 'https://baijiahao.baidu.com/s?id=1730401692801157352',
        watch: generateRandomNumber(),
      },
    ],
    culture: [
      {
        title: '清远市百家姓排名（前135位），看看你的姓氏是从哪里迁移来的？',
        bg: 'https://srgyrhbw.cn/images/image%20(102).png',
        url: 'https://baijiahao.baidu.com/s?id=1800906295998760285',
        watch: generateRandomNumber(),
      },
      {
        title: '广东清远黎氏家族与蒲坑茶的故事',
        bg: 'https://srgyrhbw.cn/images/image%20(103).png',
        url: 'http://www.li-world.com/index.php/con/1398',
        watch: generateRandomNumber(),
      },
    ],
  },
  梅州: {
    history: [
      {
        title: '这抹梅州红！近现代中国革命史上的梅州骄傲，分分钟帅你一脸！',
        bg: 'https://srgyrhbw.cn/images/image%20(104).png',
        url: 'https://www.sohu.com/a/207687348_327710',
        watch: generateRandomNumber(),
      },
      {
        title: '走进梅州全域原中央苏区，总有一些故事，让我们泪流满面',
        bg: 'https://srgyrhbw.cn/images/image%20(105).png',
        url: 'https://static.nfapp.southcn.com/content/201905/09/c2202958.html',
        watch: generateRandomNumber(),
      },
      {
        title: '被称为“世界客都”的梅州都有哪些历史名人？',
        bg: 'https://srgyrhbw.cn/images/image%20(106).png',
        url: 'https://k.sina.com.cn/article_7295511718_1b2d8aca602001cdh4.html',
        watch: generateRandomNumber(),
      },
    ],
    play: [
      {
        title: '梅州市蕉岭县长潭旅游区旅游攻略',
        bg: 'https://srgyrhbw.cn/images/image%20(107).png',
        url: 'https://zhuanlan.zhihu.com/p/613068230',
        watch: generateRandomNumber(),
      },
      {
        title: '周末好去处！打卡不一样的丙村“范儿”',
        bg: 'https://srgyrhbw.cn/images/image%20(108).png',
        url: 'https://baijiahao.baidu.com/s?id=1816137099346475619',
        watch: generateRandomNumber(),
      },
      {
        title: '雁南飞茶田里，踏青赏花正当时，赴一场春的盛宴！',
        bg: 'https://srgyrhbw.cn/images/image%20(109).png',
        url: 'https://mp.weixin.qq.com/s/0Iwh6iEX1KQ9Az3oebc3yQ',
        watch: generateRandomNumber(),
      },
      {
        title: '松口古镇游玩攻略，为你准备好，建议收藏分享',
        bg: 'https://srgyrhbw.cn/images/image%20(110).png',
        url: 'https://baijiahao.baidu.com/s?id=1786477896915697580',
        watch: generateRandomNumber(),
      },
    ],
    culture: [
      {
        title: '一个留尼汪客家家族百年史',
        bg: 'https://srgyrhbw.cn/images/image%20(111).png',
        url: 'https://mzrb.meizhou.cn/html/2024-04/11/content_354738.htm',
        watch: generateRandomNumber(),
      },
      {
        title: '客家姓氏故事：【张氏】曾被称为“嘉应之名族”',
        bg: 'https://srgyrhbw.cn/images/image%20(112).png',
        url: 'https://www.sohu.com/a/246201075_100116740',
        watch: generateRandomNumber(),
      },
    ],
  },
  香港: {
    history: [],
    play: [
      {
        title: '香港旅游规划：打造完美港岛之旅的终极指南',
        bg: 'https://srgyrhbw.cn/images/image%20(113).png',
        url: 'https://www.duoshouma.com/archives/4361',
        watch: generateRandomNumber(),
      },
      {
        title: '大陆游客赴香港旅游全攻略：行程规划、必游景点及实用注意事项',
        bg: 'https://srgyrhbw.cn/images/image%20(114).png',
        url: 'https://baijiahao.baidu.com/s?id=1819290870555436279',
        watch: generateRandomNumber(),
      },
      {
        title: '香港当季活动速览',
        bg: 'https://srgyrhbw.cn/images/image%20(115).png',
        url: 'https://www.discoverhongkong.com/tc/what-s-new/events.html',
        watch: generateRandomNumber(),
      },
    ],
    culture: [],
  },
  澳门: {
    history: [],
    play: [
      {
        title: '澳门当季活动速览',
        bg: 'https://srgyrhbw.cn/images/image%20(116).png',
        url: 'https://www.macaotourism.gov.mo/zh-hant/events/whatson/',
        watch: generateRandomNumber(),
      },
      {
        title: '保姆级澳门一日游攻略！内含10个景点、30家美食攻略~',
        bg: 'https://srgyrhbw.cn/images/image%20(117).png',
        url: 'https://zhuanlan.zhihu.com/p/620830160',
        watch: generateRandomNumber(),
      },
      {
        title: '澳门3大漫步路线推荐！用双脚探索澳门美食，文化与景点！',
        bg: 'https://srgyrhbw.cn/images/image%20(118).png',
        url: 'https://www.kkday.com/zh-my/blog/3661/asia-macao-trip',
        watch: generateRandomNumber(),
      },
    ],
    culture: [],
  },
  江门: {
    history: [
      {
        title: '江门历史沿革',
        bg: 'https://srgyrhbw.cn/images/image%20(119).png',
        url: 'http://dag.jiangmen.cn/wydq/jmgk/201501/t143088.html',
        watch: generateRandomNumber(),
      },
      {
        title: '除了第一侨乡，江门还有很多你不知道的故事',
        bg: 'https://srgyrhbw.cn/images/image%20(120).png',
        url: 'https://www.sohu.com/a/285473852_120052586',
        watch: generateRandomNumber(),
      },
      {
        title: '江门名人辈出，各领风骚一时',
        bg: 'https://srgyrhbw.cn/images/image%20(121).png',
        url: 'https://www.gdwsw.gov.cn/wsbl/content/post_35041.html',
        watch: generateRandomNumber(),
      },
    ],
    play: [
      {
        title: '地租推荐！台山最美自驾游路线全攻略就在这！吃喝玩乐靠它了！',
        bg: 'https://srgyrhbw.cn/images/image%20(122).png',
        url: 'https://mp.weixin.qq.com/s/e9ZJ06aBrO-VCdWOmAd0xg',
        watch: generateRandomNumber(),
      },
      {
        title: '江门市民俗文化，你知道几个？',
        bg: 'https://srgyrhbw.cn/images/image%20(123).png',
        url: 'http://www.chinaquhua.cn/custom/index316_list.html',
        watch: generateRandomNumber(),
      },
      {
        title: '春节里的非遗！这些属于江门街坊的年俗，你可知道？',
        bg: 'https://srgyrhbw.cn/images/image%20(124).png',
        url: 'http://www.jiangmen.gov.cn/bmpd/jmswhgdlytyj/zwgk/gzdt/content/post_2519151.html',
        watch: generateRandomNumber(),
      },
    ],
    culture: [
      {
        title: '关氏、司徒氏两族后人回 写 生续“较劲”佳话',
        bg: 'https://srgyrhbw.cn/images/image%20(125).png',
        url: 'http://www.jiangmen.gov.cn/newzjqx/qdqq/hwqq/content/post_3180626.html',
        watch: generateRandomNumber(),
      },
      {
        title: '江门站站传奇：揭秘家族传承与智慧结晶的秘密',
        bg: 'https://srgyrhbw.cn/images/image%20(126).png',
        url: 'https://www.bkwk.cn/article/jmggcqjmjzccyzhjjdmm.html',
        watch: generateRandomNumber(),
      },
    ],
  },
  惠州: {
    history: [
      {
        title: '惠州十大历史人物，惠州有哪些历史名人？',
        bg: 'https://srgyrhbw.cn/images/image%20(127).png',
        url: 'https://www.shicehao.com/v2024021310241121b6sg.html',
        watch: generateRandomNumber(),
      },
      {
        title: '揭开千年惠州城市文脉的神秘面纱',
        bg: 'https://srgyrhbw.cn/images/image%20(128).png',
        url: 'https://news.qq.com/rain/a/20201202A0F9IA00',
        watch: generateRandomNumber(),
      },
      {
        title: '《惠州历史》溯源惠州，都有哪些历史文化名片？',
        bg: 'https://srgyrhbw.cn/images/image%20(129).png',
        url: 'https://www.sohu.com/a/229996596_99956690',
        watch: generateRandomNumber(),
      },
    ],
    play: [
      {
        title: '登顶罗浮山全攻略：自然与文化的双重盛宴',
        bg: 'https://srgyrhbw.cn/images/image%20(130).png',
        url: 'https://baijiahao.baidu.com/s?id=1807255002901191346',
        watch: generateRandomNumber(),
      },
      {
        title: '文化中国行丨广东惠州：以文旅融合焕发古城活力',
        bg: 'https://srgyrhbw.cn/images/image%20(131).png',
        url: 'https://www.nfnews.com/content/O3GD1K8g60.html',
        watch: generateRandomNumber(),
      },
      {
        title: '【惠州美食】12种当地美食特色小吃主食甜点 让你吃到扶墙走！',
        bg: 'https://srgyrhbw.cn/images/image%20(132).png',
        url: 'https://zhuanlan.zhihu.com/p/66070977',
        watch: generateRandomNumber(),
      },
    ],
    culture: [
      {
        title: '惠州千年史上的“乔家大院”，你知道几个？',
        bg: 'https://srgyrhbw.cn/images/image%20(133).png',
        url: 'https://static.nfapp.southcn.com/content/202010/28/c4214810.html',
        watch: generateRandomNumber(),
      },
      {
        title: '「惠州文脉·风物」博罗韩氏家风故事代代相传 一门走出400多位科举人才',
        bg: 'https://srgyrhbw.cn/images/image%20(134).png',
        url: 'https://baijiahao.baidu.com/s?id=1787217067631116830',
        watch: generateRandomNumber(),
      },
    ],
  },
};
