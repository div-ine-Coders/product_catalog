import React from 'react';
import cn from 'classnames';
import styles from './ShopByCategory.module.scss';
import { RouterEnum } from '@constants/RouterEnum';

import imgPhones from '@assets/icons/category-phones.png';
import imgTablets from '@assets/icons/category-tablets.png';
import imgAccessories from '@assets/icons/category-accessories.png';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Mobile phones',
    count: '95 models',
    img: imgPhones,
    alt: 'Mobile phones',
    modifier: 'categoryPhones',
    link: RouterEnum.PHONES,
  },
  {
    title: 'Tablets',
    count: '24 models',
    img: imgTablets,
    alt: 'Tablets',
    modifier: 'categoryTablets',
    link: RouterEnum.TABLETS,
  },
  {
    title: 'Accessories',
    count: '100 models',
    img: imgAccessories,
    alt: 'Accessories',
    modifier: 'categoryAccessories',
    link: RouterEnum.ACCESSORIES,
  },
];

export const ShopByCategory = () => {
  return (
    <section className={styles.shopByCategory}>
      <h2 className={styles.shopByCategoryTitle}>Shop by category</h2>

      <div className={styles.shopByCategoryContainer}>
        {categories.map(({ title, count, img, alt, modifier, link }) => (
          <Link
            key={title}
            to={link}
            className={cn(styles.category, styles[modifier])}
          >
            <div className={styles.categoryImageWrapper}>
              <img className={styles.categoryImage} src={img} alt={alt} />
            </div>

            <div className={styles.categoryContent}>
              <h4 className={styles.categoryTitle}>{title}</h4>
              <p className={styles.categoryCount}>{count}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
