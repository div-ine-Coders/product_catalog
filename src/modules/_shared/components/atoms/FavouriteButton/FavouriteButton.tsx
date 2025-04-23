import React from 'react';
import styles from './FavouriteButton.module.scss';
import cn from 'classnames';

type Props = {
  isFavourite: boolean;
};

export const FavouriteButton: React.FC<Props> = ({ isFavourite }) => {
  return (
    <button
      className={cn(styles.favouriteButton, {
        [styles['favouriteButton-selected']]: isFavourite,
      })}




      
    ></button>
  );
};
