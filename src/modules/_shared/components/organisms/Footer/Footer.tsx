import styles from './Footer.module.scss';
import logo from '..//..//..//..//..//assets/images/Logo.png';
import React from 'react';

export const Footer = () => {
  const handleBackClick = () => {
    window.scrollTo({ top: 0 }); // <-- if Global smooth not working - add (behavior: 'smooth')
  };

  return (
    <footer className={styles.footer}>
      <div className={styles['footer__container']}>
        <div className={styles['footer__logo']}>
          <img src={logo} alt="Logo" />
        </div>

        <div className={styles['footer__nav-container']}>
          <ul className={styles['footer__nav']}>
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#">Rights</a>
            </li>
          </ul>
        </div>

        <div className={styles['footer__back-container']}>
          <span className={styles['footer__back-container-text']}>Back to top</span>
          <div className={styles['footer__back-container-button']} onClick={handleBackClick}>
            <button></button>
          </div>
        </div>
      </div>
    </footer>
  );
};
