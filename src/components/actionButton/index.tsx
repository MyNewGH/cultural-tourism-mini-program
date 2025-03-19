import { Text, View } from '@tarojs/components';
import classNames from 'classnames';
import { FC, useState } from 'react';

const ActionButton: FC<{ keys: string[]; defaultKey: string; onClick?: (key: string) => void }> = ({ keys, defaultKey, onClick }) => {
  const [key, setKey] = useState<string>(defaultKey);

  return (
    <View className="tw-bg-[#e7f0ff]  tw-p-[4px] tw-rounded-xl  tw-flex tw-justify-between">
      {keys?.map((item, index) => {
        return (
          <Text
            key={index}
            className={classNames(
              'tw-flex-1 tw-h-[38px] tw-flex tw-items-center tw-justify-center tw-rounded-xl tw-px-1.5 tw-min-w-fit',
              key === item ? 'tw-text-[#fff]' : 'tw-text-[#74757c]',
            )}
            style={{
              background: key === item ? 'linear-gradient(138.67deg, rgb(91, 209, 255) 9.171%,rgb(67, 146, 255) 83.342%);' : 'transparent',
            }}
            onClick={() => {
              setKey(item);
              onClick?.(item);
            }}
          >
            {item}
          </Text>
        );
      })}
    </View>
  );
};
export default ActionButton;
