import { useEffect, useRef, useState } from 'react';
import { BaseEventOrigFunction, ScrollViewProps } from '@tarojs/components';

function useScrolling<T>(fn: () => Promise<any>): {
  onScroll: ScrollViewProps['onScroll'];
  list: Array<T>;
  isEnd?: boolean;
  hasNetWord?: boolean;
} {
  const [dataList, setDataList] = useState<Array<T>>([]);
  const otherRef = useRef<{
    isEnd: boolean;
    total?: number;
    hasNetWord?: boolean;
  }>({
    isEnd: false,
    hasNetWord: true,
  });
  useEffect(() => {
    fn()
      .then((res) => {
        setDataList(res);
        otherRef.current.isEnd = Array.isArray(res) && res.length > 40;
        otherRef.current.total = 26;
        return res;
      })
      .catch(() => {});
  }, []);

  const onScroll: BaseEventOrigFunction<ScrollViewProps.onScrollDetail> = async (_e) => {
    const { total } = otherRef.current;
    if (total && dataList.length < total) {
      const list = await fn();
      const newList = [...dataList, ...list];
      setDataList([...newList]);
      otherRef.current.isEnd = newList.length >= total;
    }
  };
  return {
    onScroll,
    list: dataList,
    ...otherRef.current,
  };
}
export default useScrolling;
