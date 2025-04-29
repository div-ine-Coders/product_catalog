import React from 'react';
import { BackButton } from 'modules/_shared/components/atoms/BackButton';
import styles from './ProductDetailPage.module.scss';
import { Gadget } from '../../types/Gadget';
import { Info } from './Info';
import { MainSlider } from './MainSlider';
import { About } from './About';
import { TechSpecs } from './TechSpecs';
import { Recomendation } from './Recomendation';

const gadget: Gadget = {
  id: 'apple-iphone-11-128gb-black',
  namespaceId: 'apple-iphone-11',
  name: 'Apple iPhone 11 128GB Black',
  capacityAvailable: ['64GB', '128GB', '256GB'],
  capacity: '128GB',
  priceRegular: 1100,
  priceDiscount: 1050,
  colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  color: 'black',
  images: [
    'img/phones/apple-iphone-11/black/00.webp',
    'img/phones/apple-iphone-11/black/01.webp',
    'img/phones/apple-iphone-11/black/02.webp',
    'img/phones/apple-iphone-11/black/03.webp',
    'img/phones/apple-iphone-11/black/04.webp',
  ],
  description: [
    {
      title: 'And then there was Pro',
      text: [
        // eslint-disable-next-line max-len
        'A transformative triple-camera system that adds tons of capability without complexity.',
        // eslint-disable-next-line max-len
        'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
      ],
    },
    {
      title: 'Camera',
      text: [
        // eslint-disable-next-line max-len
        'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
      ],
    },
    {
      title:
        // eslint-disable-next-line max-len
        'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
      text: [
        // eslint-disable-next-line max-len
        'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
      ],
    },
  ],
  screen: "6.1' IPS",
  resolution: '1792x828',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  // camera: '12 Mp + 12 Mp + 12MP',
  // zoom: 'Digital, 5x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
};

export const ProductDetailPage = () => {
  return (
    <div className={styles.productDetail}>
      <div className={styles.productDetailHead}>
        <div className={styles.productDetailPath}>Path</div>

        <div className={styles.productDetailTitle}>
          <BackButton />
          <h2>{gadget.name}</h2>
        </div>
      </div>

      <MainSlider images={gadget.images} />

      <Info gadget={gadget} />

      <About description={gadget.description} />

      <TechSpecs gadget={gadget} />

      <Recomendation />
    </div>
  );
};
