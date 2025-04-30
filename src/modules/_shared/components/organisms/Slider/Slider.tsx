import React, { useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Slider.module.scss';

import { ArrowButton } from '../../atoms/ArrowButton';
import { ArrowDirection } from '../../../../../constants/ArrowDirection';
import { Swiper as SwiperType } from 'swiper/types';
import { Banner } from 'modules/HomePage/components/Banner';

const banners = [
  {
    title: 'Discover accessories | for your gadgets!',
    img: '/img/banner-accessories.png',
    description: 'Find something special!',
    alt: 'Accessories',
    link: '/accessories',
  },
  {
    title: 'Check out | our latest phones!',
    img: '/img/banner-phones.png',
    description: 'Top models available now',
    alt: 'Phones',
    link: '/phones',
  },
  {
    title: 'Explore tablets | with best features!',
    img: '/img/banner-tablets.png',
    description: 'Perfect for work and fun',
    alt: 'Tablets',
    link: '/tablets',
  },
];

export const Slider = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleBulletClick = (index: number) => {
    swiperRef.current?.swiper.slideTo(index);
  };

  return (
    <div className={styles.sliderComponentWrapper}>
      <div className={styles.sliderRow}>
        <div className={styles.arrowButtonWrapper}>
          <ArrowButton direction={ArrowDirection.Left} click={handlePrev} />
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          loop={true}
          onSlideChange={(swiper: SwiperType) =>
            setActiveIndex(swiper.realIndex)
          }
          className={styles.customSliderSwiper}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <Banner
                title={banner.title}
                img={banner.img}
                description={banner.description}
                alt={banner.alt}
                link={banner.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.arrowButtonWrapper}>
          <ArrowButton direction={ArrowDirection.Right} click={handleNext} />
        </div>
      </div>

      <div className={styles.customPagination}>
        {banners.map((_, index) => (
          <div
            key={index}
            className={`${styles.customPaginationBullet} ${
              activeIndex === index ? styles.active : ''
            }`}
            onClick={() => handleBulletClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
