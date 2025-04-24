import React, { useState } from 'react';
import logo from '../../../assets/images/LogoMain.png';
import styles from './Header.module.scss';
import cn from 'classnames';
import { Navbar } from '../Navbar/Navbar';
import iconFavorite from '../../../assets/icons/icon-favorite-heart.svg';
import iconBag from '../../../assets/icons/icon-shopping-bag.svg';
// eslint-disable-next-line max-len
import { IconWithCounter } from '../../../modules/_shared/components/atoms/icons';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <>
      <header className={cn(styles.header, 'uppercase')}>
        {/* Логотип та Навігація */}
        <div className={styles.headerLeft}>
          <div className={styles.headerLogo}>
            <a href="/" className={styles.logoLink}>
              <img className={styles.navImg} src={logo} alt="Logo" />
            </a>
          </div>

          {/* Навігація */}
          <div className={styles.headerNav}>
            <nav className={styles.nav}>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <a
                    href="/"
                    className={cn(styles.navLink, {
                      [styles.isActive]: currentPath === '/',
                    })}
                  >
                    home
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a
                    href="/phones"
                    className={cn(styles.navLink, {
                      [styles.isActive]: currentPath === '/phones',
                    })}
                  >
                    phone
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a
                    href="/tablets"
                    className={cn(styles.navLink, {
                      [styles.isActive]: currentPath === '/tablets',
                    })}
                  >
                    tablets
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a
                    href="/accessories"
                    className={cn(styles.navLink, {
                      [styles.isActive]: currentPath === '/accessories',
                    })}
                  >
                    accessories
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Іконки та Бургер Меню */}
        <div className={styles.headerIcons}>
          <a
            href="/favorites"
            className={styles.icon}
            aria-label="Go to Favorites"
          >
            <IconWithCounter icon={iconFavorite} count={3} alt="Favorites" />
          </a>
          <a
            href="/shopping-bag"
            className={`${styles.icon} ${styles.iconShoppingBag}`}
            aria-label="Go to Shopping Bag"
          >
            <IconWithCounter icon={iconBag} count={5} alt="Shopping Bag" />
          </a>
          <button
            onClick={() => setIsMenuOpen(true)}
            className={styles.iconBurgerMenu}
            aria-label="Menu"
          />
        </div>
      </header>

      {isMenuOpen && (
        <Navbar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      )}
    </>
  );
};
