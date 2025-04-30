import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import homeIcon from '@assets/icons/icon-home.svg';
import arrowIcon from '@assets/icons/icon-arrow-left-grey.svg';

// Умовний словник назв
const nameMap: Record<string, string> = {
  products: 'Products',
  phones: 'Phones',
  tablets: 'Tablets',
  accessories: 'Accessories',
  favorites: 'Favorites',
  cart: 'Cart',
};

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const [dynamicNames, setDynamicNames] = useState<Record<string, string>>({});

  const pathnames = location.pathname.split('/').filter(Boolean);

  useEffect(() => {
    const lastSegment = pathnames[pathnames.length - 1];

    if (lastSegment && /^\d+$/.test(lastSegment)) {
      fetch(`/api/products/${lastSegment}`)
        .then(res => res.json())
        .then(data => {
          if (data?.name) {
            setDynamicNames(prev => ({
              ...prev,
              [lastSegment]: data.name,
            }));
          }
        })
        .catch(() => {});
    }
  }, [pathnames]);

  return (
    <div className={styles.breadcrumbs}>
      <Link to="/" className={styles.breadcrumbsLink}>
        <img src={homeIcon} alt="Home" />
      </Link>

      {pathnames.map((segment, index) => {
        const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
        const isLast = index === pathnames.length - 1;

        const displayName =
          nameMap[segment] ||
          dynamicNames[segment] ||
          decodeURIComponent(segment);

        return (
          <React.Fragment key={routeTo}>
            <span className={styles.breadcrumbsSeparator}>
              <img src={arrowIcon} alt="arrow" />
            </span>

            {isLast ? (
              <span className={styles.breadcrumbsCurrent}>{displayName}</span>
            ) : (
              <Link to={routeTo} className={styles.breadcrumbsLink}>
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
