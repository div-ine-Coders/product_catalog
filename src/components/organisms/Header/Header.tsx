import React, { useState } from 'react';
import logo from '../../../assets/images/LogoMain.png';
import styles from './Header.module.scss';
import cn from 'classnames';
import { Navbar } from '../Navbar/Navbar';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={cn(styles.header, 'uppercase')}>
        {/* Логотип та Навігація */}
        <div className={styles.header__left}>
          <div className={styles.header__logo}>
            <a href="/" className={styles.logoLink}>
              <img className={styles.navImg} src={logo} alt="Logo" />
            </a>
          </div>

          {/* Навігація */}
          <div className={styles.header__nav}>
            <nav className={styles.nav}>
              <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                  <a href="/" className={cn(styles.nav__link, styles.isActive)}>
                    home
                  </a>
                </li>
                <li className={styles.nav__item}>
                  <a href="/phones" className={styles.nav__link}>
                    phone
                  </a>
                </li>
                <li className={styles.nav__item}>
                  <a href="/tablets" className={styles.nav__link}>
                    tablets
                  </a>
                </li>
                <li className={styles.nav__item}>
                  <a href="/accessories" className={styles.nav__link}>
                    accessories
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Іконки та Бургер Меню */}
        <div className={styles.header__icons}>
          <a
            href="/favorites"
            className={`${styles.icon} ${styles.iconFavoriteHeart}`}
          />
          <a
            href="/cart"
            className={`${styles.icon} ${styles.iconShoppingBag}`}
          />
          <button
            onClick={() => setIsMenuOpen(true)}
            className={styles.iconBurgerMenu}
            aria-label="Menu"
          />
        </div>
      </header>

      {isMenuOpen && <Navbar onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};
