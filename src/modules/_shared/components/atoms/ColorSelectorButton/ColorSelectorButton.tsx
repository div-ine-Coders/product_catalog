import React from 'react';
import cn from 'classnames';
import styles from './ColorSelector.module.scss';

interface Props {
  isActive?: boolean;
  color?: string; //It must be enum with all colors
  click?: () => void;
}

export const ColorSelectorButton: React.FC<Props> = ({
  isActive = false,
  color = 'red',
  click,
}) => {
  return (
    <div
      className={cn(styles.colorSelector, {
        [styles.colorSelectorActive]: isActive,
      })}
    >
      <a
        style={{ backgroundColor: color }}
        className={styles.colorSelectorLink}
        onClick={click}
      ></a>
    </div>
  );
};
