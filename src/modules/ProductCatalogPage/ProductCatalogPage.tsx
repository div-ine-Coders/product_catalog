/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable prettier/prettier */
/* eslint-disable max-len */

import { CatalogList } from 'modules/_shared/components/molecules/CatalogList';
import { useEffect, useMemo, useState } from 'react';
import styles from './ProductCatalogPage.module.scss';
import { Dropdown } from 'modules/_shared/components/atoms/Dropdown';
import { ArrowButton } from 'modules/_shared/components/atoms/ArrowButton';
import { ArrowDirection } from '@constants/ArrowDirection';
import { DefaultButton } from 'modules/_shared/components/atoms/DefaultButton';
import cn from 'classnames';
import { PaginationPerPage } from '@constants/PaginationPerPage';
import { sortAndPaginate } from '@hooks/factoryHooks/sortAndPagination';
import { useSyncSearchParamsWithStore } from '@hooks/effectHooks/useSearchParamsSync';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAccessories } from '@hooks/useAccessories';
import { usePhones } from '@hooks/usePhones';
import { useTablets } from '@hooks/useTablets';
import { Breadcrumbs } from 'modules/_shared/components/molecules/Breadcrumbs';


export const ProductCatalogPage = () => {
  useSyncSearchParamsWithStore();

  const [sortBy, setSortBy] = useState<string>('Newest');
  const [perPage, setPerPage] = useState({
    page: 1,
    perPage: PaginationPerPage.All,
  });

  const phones = usePhones();
  const tablets = useTablets();
  const accessories = useAccessories();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    params.delete('sort');
    params.delete('page');
    params.delete('perPage');

    navigate(
      {
        pathname: location.pathname,
        search: params.toString(),
      },
      { replace: true },
    );

    setSortBy('Newest');
    setPerPage({
      page: 1,
      perPage: PaginationPerPage.All,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, navigate]);

  const updateUrlParams = (
    newParams: Record<string, string | number | undefined | null>,
    options: { replace?: boolean } = { replace: true },
  ) => {
    const params = new URLSearchParams(location.search);

    Object.entries(newParams).forEach(([key, value]) => {
      const shouldDelete =
        value === undefined ||
        value === null ||
        (key === 'sort' && value === 'Newest') ||
        (key === 'page' && value === 1) ||
        (key === 'perPage' && value === PaginationPerPage.All);

      if (shouldDelete) {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    });

    navigate(
      { pathname: location.pathname, search: params.toString() },
      { replace: options.replace },
    );
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    updateUrlParams({ sort: value });
  };

  const handlePerPageChange = (value: string) => {
    const updated = {
      page: 1,
      perPage: value as PaginationPerPage,
    };

    setPerPage(updated);
    updateUrlParams({ page: 1, perPage: updated.perPage });
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) {
      return;
    }

    setPerPage(prev => ({ ...prev, page: newPage }));
    updateUrlParams({ page: newPage });
  };

  const { data, isLoading, error, totalLength } = useMemo(() => {
    if (location.pathname.includes('phones')) {
      return phones;
    }

    if (location.pathname.includes('tablets')) {
      return tablets;
    }

    if (location.pathname.includes('accessories')) {
      return accessories;
    }

    return { data: [], isLoading: false, error: null, totalLength: 0 };
  }, [phones, tablets, accessories, location.pathname]);

  const sortedAndPaginatedData = sortAndPaginate(
    data,
    sortBy,
    {
      Newest: 'year',
      Price: 'price',
      'A-Z': 'name',
    },
    perPage,
  );

  const getPaginationButtons = (
    totalPages: number,
    currentPage: number,
  ): (number | string)[] => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const buttons: (number | string)[] = [];

    const isNearStart = currentPage <= 2;
    const isNearEnd = currentPage >= totalPages - 1;

    buttons.push(1);

    if (isNearStart) {
      buttons.push(2, 3, '...', totalPages);
    } else if (isNearEnd) {
      buttons.push('...', totalPages - 2, totalPages - 1, totalPages);
    } else {
      buttons.push('...', currentPage, '...', totalPages);
    }

    return buttons;
  };

  const totalPages =
    perPage.perPage === 'All'
      ? 1
      : Math.ceil(totalLength / Number(perPage.perPage));

  const paginationButtons = getPaginationButtons(totalPages, perPage.page);

  const getCategoryTitle = () => {
    if (location.pathname.includes('phones')) {
      return 'Mobile phones';
    }

    if (location.pathname.includes('tablets')) {
      return 'Tablets';
    }

    if (location.pathname.includes('accessories')) {
      return 'Accessories';
    }

    return 'Products';
  };

  return (
    <div className={styles.catalogPage}>
      <Breadcrumbs />
      <div className={styles.catalogPageQuantity}>
        <h1 className={styles.catalogPageQuantityTitle}>
          {getCategoryTitle()}
        </h1>
        <span className={styles.catalogPageQuantityItems}>
          {isLoading ? 'Loading...' : `${totalLength} items`}
        </span>
      </div>

      <div className={styles.catalogPageSort}>
        <div className={cn(styles.catalogPageSortBy, styles.isWide)}>
          <span className={cn('smallText', styles.catalogPageSortByText)}>
            Sort by
          </span>
          <div className={styles.catalogPageSortByButton}>
            <Dropdown
              items={['Newest', 'Price', 'A-Z']}
              activeItem={sortBy}
              onSelect={handleSortChange}
            />
          </div>
        </div>

        <div className={styles.catalogPageSortBy}>
          <span className={cn('smallText', styles.catalogPageSortByText)}>
            Items on page
          </span>
          <div className={styles.catalogPageSortByButton}>
            <Dropdown
              items={Object.values(PaginationPerPage)}
              activeItem={perPage.perPage}
              onSelect={handlePerPageChange}
            />
          </div>
        </div>
      </div>

      <div className={styles.catalogPageList}>
        {isLoading && <div>Loading products...</div>}
        {error && <div>Error loading products: {error}</div>}
        {!isLoading && !error && (
          <CatalogList products={sortedAndPaginatedData}  />
        )}
      </div>

      {totalPages > 1 && (
        <div className={styles.catalogPageSwitch}>
          <div className={styles.catalogPageSwitchButtons}>
            <div className={styles.catalogPageSwitchButtonsArrow}>
              <ArrowButton
                direction={ArrowDirection.Left}
                isDisabled={perPage.page === 1}
                click={() => handlePageChange(perPage.page - 1)}
              />
            </div>

            <div className={styles.catalogPageSwitchButtonsPage}>
              {paginationButtons.map((item, index) =>
                typeof item === 'number' ? (
                  <DefaultButton
                    key={index}
                    isSelected={perPage.page !== item}
                    click={() => handlePageChange(item)}
                  >
                    {item}
                  </DefaultButton>
                ) : (
                  <span key={index} className={styles.paginationDots}>
                    ...
                  </span>
                ),
              )}
            </div>

            <div className={styles.catalogPageSwitchButtonsArrow}>
              <ArrowButton
                direction={ArrowDirection.Right}
                isDisabled={perPage.page >= totalPages}
                click={() => handlePageChange(perPage.page + 1)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
