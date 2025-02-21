import { ConfigProvider } from '@antmjs/vantui';
import { Component, PropsWithChildren } from 'react';
import { IThemeVars } from '@antmjs/vantui/types/config-provider';
import './app.less';

const themeVars: IThemeVars = {
  primaryColor: '#FFF272',
  rateIconFullColor: '#e19a9a',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  buttonNormalHeight: '64px',
};

class App extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return <ConfigProvider themeVars={themeVars}>{this.props.children}</ConfigProvider>;
  }
}

export default App;
