import React, { ReactNode } from 'react';
import styles from './DefaultButton.module.scss';
import cn from 'classnames';

type Props = {
  isSelected?: boolean;
  click?: () => void;
  children: ReactNode | ReactNode[];
};

export const DefaultButton: React.FC<Props> = ({
  isSelected = false,
  click,
  children,
}) => {
  return (
    <button
      className={cn(styles.defaultButton, {
        [styles['defaultButton-selected']]: isSelected,
      })}
      onClick={click}
    >
      {children}
    </button>
  );
};
