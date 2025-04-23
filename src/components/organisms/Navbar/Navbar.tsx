import React from 'react';
import styles from './Navbar.module.scss';
import logo from '../../../assets/images/LogoMain.png';
import cn from 'classnames';

interface Props {
  onClose: () => void;
}

export const Navbar: React.FC<Props> = ({ onClose }) => {
  return (
    <aside className={cn(styles.menu, 'uppercase')} id="menu">
      <div className={styles.container}>
        <div className={styles.menuTop}>
          <a href="/" className={styles.logoLink}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </a>

          <div className={styles.headerIcons}>
            {/* Кнопка для закриття меню */}
            <button
              onClick={onClose}
              className={`${styles.icon} ${styles.iconClose}`}
              aria-label="Close Menu"
            />
          </div>
        </div>

        <div className={styles.menuBottom}>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href="/" className={`${styles.navLink} ${styles.isActive}`}>
                  home
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/phones" className={styles.navLink}>
                  phone
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/tablets" className={styles.navLink}>
                  tablets
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/accessories" className={styles.navLink}>
                  accessories
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.menuIcons}>
          <a
            href="/favorites"
            className={`${styles.icon} ${styles.iconFavoriteHeart}`}
          />
          <a
            href="/cart"
            className={`${styles.icon} ${styles.iconShoppingBag}`}
          />
        </div>
      </div>
    </aside>
  );
};
