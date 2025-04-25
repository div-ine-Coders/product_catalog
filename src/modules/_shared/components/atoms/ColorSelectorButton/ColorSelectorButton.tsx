import React from 'react';
import cn from 'classnames';
import styles from './ColorSelector.module.scss';
import { Color } from '../../../../../types/Color';

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
  const colorMap: Record<string, string> = {
    black: '#000',
    gold: '#FFD700',
    yellow: '#FFFF00',
    green: '#008000',
    midnightgreen: '#004953',
    silver: '#c0c0c0',
    spacegray: '#717378',
    red: '#ff0000',
    white: '#FFF',
    purple: '#800080',
    coral: '#ff7f50',
    rosegold: '#B76E79',
    midnight: '#191970',
    spaceblack: '#505150',
    blue: '#0000ff',
    pink: '#ffc0cb',
    sierrablue: '#BFDAF7',
    graphite: '#41424C',
    skyblue: '#87CEEB',
    starlight: '#F8F9EC',
  };

  return (
    <div
      className={cn(styles.colorSelector, {
        [styles.colorSelectorActive]: isActive,
      })}
    >
      <a
        style={{
          backgroundColor:
            colorMap[color.replaceAll(' ', '').replaceAll('-', '')],
        }}
        className={styles.colorSelectorLink}
        onClick={click}
      ></a>
    </div>
  );
};
