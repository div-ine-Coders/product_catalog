import styles from './Footer.module.scss';
import logo from '@assets/icons/Logo.png';
import * as React from 'react';
import cn from 'classnames';
import { ArrowButton } from '../../atoms/ArrowButton';
import { ArrowDirection } from '@constants/ArrowDirection';

export const Footer = () => {
  const handleBackClick = () => {
    window.scrollTo({ top: 0 }); // <-- if Global smooth not working - add (behavior: 'smooth')
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <img src={logo} alt="Logo" />
        </div>

        <div className={styles.footerNavContainer}>
          <a
            href="#"
            className={cn('uppercase', styles.footerNavContainerLink)}
            aria-label="Visit GitHub page"
          >
            GitHub
          </a>

          <a
            href="#"
            className={cn('uppercase', styles.footerNavContainerLink)}
            aria-label="Contact us"
          >
            Contacts
          </a>

          <a
            href="#"
            className={cn('uppercase', styles.footerNavContainerLink)}
            aria-label="View rights information"
          >
            Rights
          </a>
        </div>

        <div className={styles.footerBackContainer}>
          <span className={cn('smallText', styles.footerBackContainerText)}>
            Back to top
          </span>
          <div
            className={styles.footerBackContainerButton}
            onClick={handleBackClick}
          >
            <ArrowButton direction={ArrowDirection.Up} isDisabled={false} />
          </div>
        </div>
      </div>
    </footer>
  );
};
