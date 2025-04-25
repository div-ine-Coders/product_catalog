import React, { useState } from 'react';
import logo from '@assets/icons/Logo.png';
import iconFavorite from '@assets/icons/icon-favorite-heart.svg';
import iconBag from '@assets/icons/icon-shopping-bag.svg';
import styles from './Header.module.scss';
import cn from 'classnames';
import { Navbar } from '../Navbar/Navbar';

import { IconWithCounter } from '../../atoms/icons';
import { Link, NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(styles.navLink, { [styles.isActive]: isActive });

  const getIconLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(styles.icon, { [styles.isActive]: isActive });

  return (
    <>
      <header className={cn(styles.header, 'uppercase')}>
        {/* Логотип та Навігація */}
        <div className={styles.headerLeft}>
          <div className={styles.headerLogo}>
            <Link to="/" className={styles.logoLink}>
              <img className={styles.navImg} src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Навігація */}
          <div className={styles.headerNav}>
            <nav className={styles.nav}>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <NavLink to="/" className={getNavLinkClass}>
                    home
                  </NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink to="/phones" className={getNavLinkClass}>
                    phone
                  </NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink to="/tablets" className={getNavLinkClass}>
                    tablets
                  </NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink to="/accessories" className={getNavLinkClass}>
                    accessories
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Іконки та Бургер Меню */}
        <div className={styles.headerIcons}>
          <NavLink
            to="/favorites"
            className={getIconLinkClass}
            aria-label="Go to Favorites"
          >
            <IconWithCounter icon={iconFavorite} count={3} alt="Favorites" />
          </NavLink>
          <NavLink
            to="/shopping-bag"
            className={getIconLinkClass}
            aria-label="Go to Shopping Bag"
          >
            <IconWithCounter icon={iconBag} count={5} alt="Shopping Bag" />
          </NavLink>
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
