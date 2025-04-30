import React from 'react';
import { Banner } from './components/Banner';
import { ShopByCategory } from './components/ShopByCategory';
// import { HotPrices } from './components/HotPrices';
// import { BrandNewModels } from './components/BrandNewModels';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <>
      <main className={styles.page}>
        <div className={styles.bannerTitle}>
          <h1 className={styles.bannerTitleText}>
            <span className={styles.mobileOnly}>
              Welcome to Nice
              <br />
              Gadgets store!
            </span>
            <span className={styles.desktopOnly}>
              Welcome to Nice Gadgets store!
            </span>
          </h1>
        </div>
        <section className={styles.pageSection}>
          <Banner />
        </section>

        {/* <section className={styles.pageSection}>
          <BrandNewModels />
        </section> */}

        <section className={styles.pageSection}>
          <ShopByCategory />
        </section>

        {/* <section className={styles.pageSection}>
          <HotPrices />
        </section> */}
      </main>
    </>
  );
};
