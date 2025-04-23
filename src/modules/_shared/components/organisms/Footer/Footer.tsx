import styles from './Footer.module.scss';
import logo from '..//..//..//..//..//assets/icons/Logo.png';
import * as React from 'react';
import cn from 'classnames';

export const Footer = () => {
  const handleBackClick = () => {
    window.scrollTo({ top: 0 }); // <-- if Global smooth not working - add (behavior: 'smooth')
  };

  return (
    <footer className={styles.footer}>
      <div className={styles['footerContainer']}>
        <div className={styles['footerLogo']}>
          <img src={logo} alt="Logo" />
        </div>

        <div className={styles['footerNavContainer']}>
          <ul className={styles['footerNav']}>
            <li>
              <a href="#" className="uppercase">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="uppercase">
                Contacts
              </a>
            </li>
            <li>
              <a href="#" className="uppercase">
                Rights
              </a>
            </li>
          </ul>
        </div>

        <div className={styles['footerBackContainer']}>
          <span className={cn('smallText', styles['footerBackContainerText'])}>
            Back to top
          </span>
          <div
            className={styles['footerBackContainerButton']}
            onClick={handleBackClick}
          >
            <button></button>
          </div>
        </div>
      </div>
    </footer>
  );
};
