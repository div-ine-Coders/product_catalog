import * as React from 'react';
import './App.scss';
import { Header } from 'modules/_shared/components/organisms/Header';
import { Footer } from 'modules/_shared/components/organisms/Footer';
import { CartItem } from './modules/_shared/components/molecules/CartItem';

const item1 = {
  id: 1,
  category: 'phones',
  itemId: 'apple-iphone-7-32gb-black',
  name: 'Apple iPhone 7 32GB Black',
  fullPrice: 400,
  price: 375,
  screen: "4.7' IPS",
  capacity: '32GB',
  color: 'black',
  ram: '2GB',
  year: 2016,
  image: 'img/phones/apple-iphone-7/black/00.webp',
};

const item2 = {
  id: 2,
  category: 'phones',
  itemId: 'apple-iphone-7-plus-32gb-black',
  name: 'Apple iPhone 7 Plus 32GB Black',
  fullPrice: 540,
  price: 500,
  screen: "5.5' IPS",
  capacity: '32GB',
  color: 'black',
  ram: '3GB',
  year: 2016,
  image: 'img/phones/apple-iphone-7-plus/black/00.webp',
};

const item3 = {
  id: 3,
  category: 'phones',
  itemId: 'apple-iphone-8-64gb-gold',
  name: 'Apple iPhone 8 64GB Gold',
  fullPrice: 600,
  price: 550,
  screen: "4.7' IPS",
  capacity: '64GB',
  color: 'gold',
  ram: '2GB',
  year: 2017,
  image: 'img/phones/apple-iphone-8/gold/00.webp',
};

export const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="main">
        <CartItem good={item1} />
        <CartItem good={item2} />
        <CartItem good={item3} />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
