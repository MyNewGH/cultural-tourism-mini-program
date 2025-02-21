export default {
  pages: ['pages/home/index', 'pages/mine/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    custom: false,
    color: '#C4C4C4',
    selectedColor: '#222222',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
        iconPath: 'assets/images/home.png',
        selectedIconPath: 'assets/images/home_active.png',
      },
      {
        pagePath: 'pages/mine/index',
        text: '资讯',
        iconPath: 'assets/images/mine.png',
        selectedIconPath: 'assets/images/mine_active.png',
      },
    ],
  },
};
