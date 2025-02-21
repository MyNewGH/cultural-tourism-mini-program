import { useState, ReactNode } from 'react';
import classNames from 'classnames';
import { ScrollView, View, Text } from '@tarojs/components';
import { isObject } from '@/utils/serialize';
import styles from './index.module.less';

type TDefault = {
  id: number;

  name?: string;
};
type Tab<T = TDefault | string> = T;
interface ITabsProps<P> {
  tabList: Tab<P>[];
  defaultActive?: number | string;
  customTab?: (tab: Tab<P>, index: number) => ReactNode;
  onTabClick?: (index: number) => void;
  gap?: number;
  className?: string;
  tabClassName?: string;
}
function Tabs<T>(props: ITabsProps<T>) {
  const { tabList = [], customTab, className, gap, onTabClick, tabClassName, defaultActive } = props;
  const [currentTab, setCurrentTab] = useState<typeof defaultActive>(defaultActive || 0);
  const handleTabClick = (index: number) => {
    setCurrentTab(index);
    onTabClick?.(index);
  };
  return (
    <ScrollView
      scrollX
      scrollWithAnimation
      className={classNames(className, styles.tabs_area)}
      scrollIntoView={`tab${currentTab}`}
      scrollIntoViewAlignment="center"
    >
      {tabList.map((tab, index) => (
        <View
          className={classNames(tabClassName, currentTab === index ? styles.active_tab : styles.tab, {
            [`ml-${gap}`]: index !== 0 && gap && gap > 0,
          })}
          key={index}
          onClick={() => {
            handleTabClick(index);
          }}
          id={`tab${index}`}
        >
          {customTab ? (
            customTab(tab, index)
          ) : (
            <Text>{typeof tab === 'string' ? tab : isObject(tab) && Object.prototype.hasOwnProperty('name') ? (tab as TDefault).name : ''}</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
}
export default Tabs;
