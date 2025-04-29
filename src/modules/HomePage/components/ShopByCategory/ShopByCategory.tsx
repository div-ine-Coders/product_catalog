import React from 'react';
import cn from 'classnames';
import styles from './ShopByCategory.module.scss';
import { RouterEnum } from '@constants/RouterEnum';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Mobile phones',
    count: '95 models',
    img: '/img/category-phones.png',
    alt: 'Mobile phones',
    modifier: 'categoryPhones',
    link: RouterEnum.PHONES,
  },
  {
    title: 'Tablets',
    count: '24 models',
    img: '/img/category-tablets.png',
    alt: 'Tablets',
    modifier: 'categoryTablets',
    link: RouterEnum.TABLETS,
  },
  {
    title: 'Accessories',
    count: '100 models',
    img: '/img/category-accessories.png',
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
        {categories.map(categories => (
          <Link
            key={categories.title}
            to={categories.link}
            className={cn(styles.category, styles[categories.modifier])}
          >
            <div className={styles.categoryImageWrapper}>
              <img
                className={styles.categoryImage}
                src={categories.img}
                alt={categories.alt}
              />
            </div>

            <div className={styles.categoryContent}>
              <h4 className={styles.categoryTitle}>{categories.title}</h4>
              <p className={styles.categoryCount}>{categories.count}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
