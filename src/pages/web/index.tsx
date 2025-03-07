import { WebView } from '@tarojs/components';
import miniApi from '@/utils/miniApi';

const Page = () => {
  const { router } = miniApi.getCurrentInstance();
  // 获取传递过来的参数
  const { url, title } = router?.params || {};
  return <WebView src={`https://srgyrhbw.cn?url=${url}&title=${title}`} />;
};
export default Page;
