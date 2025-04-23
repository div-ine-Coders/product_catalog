import React from 'react';
import cn from 'classnames';
import styles from './ColorSelector.module.scss';

type Props = {
  isActive?: boolean;
  color?: string;
  click?: () => void;
};

export const ColorSelectorButton: React.FC<Props> = ({
  isActive = false,
  color = 'red',
  click,
}) => {
  return (
    <div
      className={cn(styles.colorSelector, {
        [styles['colorSelector-active']]: isActive,
      })}
    >
      <a
        style={{ backgroundColor: color }}
        className={cn(styles['colorSelector-link'])}
        onClick={click}
      ></a>
    </div>
  );
};
