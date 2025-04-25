import React from 'react';
import cn from 'classnames';
import styles from './ColorSelector.module.scss';
import { Color } from '../../../../../types/Color';
import { ColorMapping } from '../../../utils/ColorMapping';

interface Props {
  isActive?: boolean;
  color?: Color;
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
        style={{
          backgroundColor: ColorMapping(color),
        }}
        className={styles.colorSelectorLink}
        onClick={click}
      ></a>
    </div>
  );
};
