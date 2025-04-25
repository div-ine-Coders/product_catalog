import styles from './Footer.module.scss';
import logo from '@assets/icons/Logo.png';
import * as React from 'react';
import cn from 'classnames';
import { ArrowButton } from '../../atoms/ArrowButton';
import { ArrowDirection } from '@constants/ArrowDirection';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const handleBackClick = () => {
    window.scrollTo({ top: 0 }); // <-- if Global smooth not working - add (behavior: 'smooth')
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <img className={styles.footerLogoIcon} src={logo} alt="Logo" />
        </div>

        <div className={styles.footerNavContainer}>
          <Link
            to="#"
            className={cn('uppercase', styles.footerNavContainerLink)}
            aria-label="Visit GitHub page"
          >
            GitHub
          </Link>

          <Link
            to="#"
            className={cn('uppercase', styles.footerNavContainerLink)}
            aria-label="Contact us"
          >
            Contacts
          </Link>

          <Link
            to="#"
            className={cn('uppercase', styles.footerNavContainerLink)}
            aria-label="View rights information"
          >
            Rights
          </Link>
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
