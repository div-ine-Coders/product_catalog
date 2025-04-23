import React from 'react';
import styles from './ArrowButton.module.scss';
import cn from 'classnames';
import { ArrowDirection } from '../../../../../constants';

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
