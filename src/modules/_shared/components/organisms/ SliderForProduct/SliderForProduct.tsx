import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { Product } from '../../../../../types/Product';
import { ProductCard } from '../../molecules/ProductCard';

import styles from './SliderForProduct.module.scss';

interface Props {
  products: Product[];
  title: string;
}

export const ProductCarousel: React.FC<Props> = ({ products, title }) => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselHeader}>
        <h2 className={styles.carouselTitle}>{title}</h2>
        <div className={styles.carouselNavButtons}>
          <button
            className={`${styles.carouselButton} ${styles.prevButton} carousel-button-prev-${title.replace(/\s+/g, '-')}`}
          ></button>
          <button
            className={`${styles.carouselButton} ${styles.nextButton} carousel-button-next-${title.replace(/\s+/g, '-')}`}
          ></button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={4}
        slidesPerGroup={1}
        loop={false}
        navigation={{
          nextEl: `.carousel-button-next-${title.replace(/\s+/g, '-')}`,
          prevEl: `.carousel-button-prev-${title.replace(/\s+/g, '-')}`,
        }}
        className={styles.swiperWrapper}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 8,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
        }}
      >
        {products.map(product => (
          <SwiperSlide key={product.id} className={styles.swiperSlide}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
