import React, { useEffect } from 'react';
import styles from './Navbar.module.scss';
import logo from '@assets/icons/Logo.png';
import iconFavorite from '@assets/icons/icon-favorite-heart.svg';
import iconBag from '@assets/icons/icon-shopping-bag.svg';
import cn from 'classnames';
import { IconWithCounter } from '../../atoms/icons';
import { Link, NavLink } from 'react-router-dom';

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const Navbar: React.FC<Props> = ({ onClose, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(styles.navLink, { [styles.isActive]: isActive });

  const getIconLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(styles.icon, { [styles.isActive]: isActive });

  return (
    <aside className={cn(styles.menu, 'uppercase')} id="menu">
      <div className={styles.container}>
        <div className={styles.menuTop}>
          <Link to="/" className={styles.logoLink}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </Link>

          <div className={styles.headerIcons}>
            <button
              onClick={onClose}
              className={cn(styles.icon, styles.iconClose)}
              aria-label="Close Menu"
            />
          </div>
        </div>

        <div className={styles.menuBottom}>
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

        <div className={styles.menuIcons}>
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
            <IconWithCounter icon={iconBag} count={3} alt="Shopping Bag" />
          </NavLink>
        </div>
      </div>
    </aside>
  );
};
