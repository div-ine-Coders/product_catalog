import React, { ReactNode } from 'react';
import styles from './PageSelectButton.module.scss';
import cn from 'classnames';

type Props = {
  isSelected?: boolean;
  children: ReactNode | ReactNode[];
  click?: () => void;
};

export const PageSelectButton: React.FC<Props> = ({
  isSelected = true,
  children,
  click,
}) => {
  return (
    <button
      className={cn(styles.pageSelectButton, 'button-text', {
        [styles['pageSelectButton-selected']]: isSelected,
      })}
      onClick={click}
    >
      {children}
    </button>
  );
};
