import React from 'react';
import styles from './ArrowButton.module.scss';
import cn from 'classnames';

//need to export
export enum ArrowDirection {
  Left = 'left',
  Right = 'right',
  Up = 'up',
  Down = 'down',
}

type Props = {
  direction?: ArrowDirection;
  isDisabled?: boolean;
  click?: () => void;
};

export const ArrowButton: React.FC<Props> = ({
  direction = ArrowDirection.Up,
  isDisabled = false,
}) => {
  return (
    <button
      className={cn(
        styles.arrow,
        styles[`arrow-${direction}`],
        styles['arrow-button'],
        {
          [styles['arrow-disabled']]: isDisabled,
          [styles['arrow-button-disabled']]: isDisabled,
        },
      )}
      disabled={isDisabled}
    ></button>
  );
};
