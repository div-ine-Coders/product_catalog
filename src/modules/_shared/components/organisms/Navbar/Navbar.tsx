import React, { useEffect } from 'react';
import styles from './Navbar.module.scss';
import logo from '../../../../../assets/icons/Logo.png';
import cn from 'classnames';
import iconFavorite from '../../../../../assets/icons/icon-favorite-heart.svg';
import iconBag from '../../../../../assets/icons/icon-shopping-bag.svg';
// eslint-disable-next-line max-len
import { IconWithCounter } from '../../atoms/icons';

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const Navbar: React.FC<Props> = ({ onClose, isOpen }) => {
  const currentPath = window.location.pathname;

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

  return (
    <aside className={cn(styles.menu, 'uppercase')} id="menu">
      <div className={styles.container}>
        <div className={styles.menuTop}>
          <a href="/" className={styles.logoLink}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </a>

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

        <div className={styles.menuIcons}>
          <a
            href="/favorites"
            className={cn(styles.icon, {
              [styles.isActive]: currentPath === '/favorites',
            })}
            aria-label="Go to Favorites"
          >
            <IconWithCounter icon={iconFavorite} count={3} alt="Favorites" />
          </a>
          <a
            href="/shopping-bag"
            className={cn(styles.icon, styles.iconShoppingBag, {
              [styles.isActive]: currentPath === '/shopping-bag',
            })}
            aria-label="Go to Shopping Bag"
          >
            <IconWithCounter icon={iconBag} count={3} alt="Shopping Bag" />
          </a>
        </div>
      </div>
    </aside>
  );
};
