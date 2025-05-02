import React, { useEffect } from 'react';
import styles from './Navbar.module.scss';
import logo from '@assets/icons/Logo.png';
import iconFavorite from '@assets/icons/icon-favorite-heart.svg';
import iconBag from '@assets/icons/icon-shopping-bag.svg';
import cn from 'classnames';
import { IconWithCounter } from '../../atoms/Icons/IconWithCounter';
import { Link, NavLink } from 'react-router-dom';
import { RouterEnum } from '@constants/RouterEnum';
import { getNavLinkClass, getIconLinkClass } from '../../../utils/ActiveState';
import { useFavoritesItem } from '@hooks/useFavoritesItem';
import { useCartItems } from '@hooks/useCartStore';

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const Navbar: React.FC<Props> = ({ onClose, isOpen }) => {
  const favorites = useFavoritesItem();
  const cart = useCartItems();

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
                <NavLink
                  to={RouterEnum.HOME}
                  onClick={onClose}
                  className={({ isActive }) =>
                    getNavLinkClass(styles, { isActive })
                  }
                >
                  home
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to={RouterEnum.PHONES}
                  onClick={onClose}
                  className={({ isActive }) =>
                    getNavLinkClass(styles, { isActive })
                  }
                >
                  phones
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to={RouterEnum.TABLETS}
                  onClick={onClose}
                  className={({ isActive }) =>
                    getNavLinkClass(styles, { isActive })
                  }
                >
                  tablets
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to={RouterEnum.ACCESSORIES}
                  onClick={onClose}
                  className={({ isActive }) =>
                    getNavLinkClass(styles, { isActive })
                  }
                >
                  accessories
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.menuIcons}>
          <NavLink
            to={RouterEnum.FAVORITES}
            onClick={onClose}
            className={({ isActive }) => getIconLinkClass(styles, { isActive })}
            aria-label="Go to Favorites"
          >
            <IconWithCounter
              icon={iconFavorite}
              count={favorites.items.length}
              alt="Favorites"
            />
          </NavLink>
          <NavLink
            to={RouterEnum.CART}
            onClick={onClose}
            className={({ isActive }) => getIconLinkClass(styles, { isActive })}
            aria-label="Go to Shopping Bag"
          >
            <IconWithCounter
              icon={iconBag}
              count={cart.cards.length}
              alt="Shopping Bag"
            />
          </NavLink>
        </div>
      </div>
    </aside>
  );
};
