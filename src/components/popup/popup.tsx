import { forwardRef, useImperativeHandle, useState } from 'react';
import { Popup } from '@antmjs/vantui';
import { PopupProps } from '@antmjs/vantui/types/popup';
import classNames from 'classnames';

export interface PopupRef {
  setVisible?: (show: boolean) => void;
}

const PopupCom = forwardRef<PopupRef, PopupProps>((props, ref) => {
  const { children, className, show = false, onClose, ...rest } = props;
  const [visible, setVisible] = useState(show);
  useImperativeHandle(ref, () => {
    return {
      setVisible: (flag: boolean) => {
        setVisible(flag);
      },
    };
  }, []);
  const handleClose = () => {
    onClose?.();
    setVisible(false);
  };
  return (
    <Popup show={visible} onClose={handleClose} className={classNames('tw-overflow-hidden tw-w-full', className)} {...rest}>
      {children}
    </Popup>
  );
});
export default PopupCom;
