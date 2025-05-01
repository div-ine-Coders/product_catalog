import React from 'react';
import { BackButton } from 'modules/_shared/components/atoms/BackButton';
import styles from './ProductDetailsPage.module.scss';
import { Info } from './Info';
import { MainSlider } from './MainSlider';
import { About } from './About';
import { TechSpecs } from './TechSpecs';
import { Recomendation } from './Recomendation';
import { Breadcrumbs } from 'modules/_shared/components/molecules/Breadcrumbs';
import { useGadgetDetails } from './useGadgetDetails';
import { Link } from 'react-router-dom';

export const ProductDetailsPage = () => {
  const { gadget, isLoading, errorMessage, product } = useGadgetDetails();

  return (
    <div className={styles.productDetail}>
      {gadget && product && (
        <>
          <div className={styles.productDetailHead}>
            <Breadcrumbs />

            <div className={styles.productDetailTitle}>
              <Link
                to="../"
                aria-label={'back'}
                className={styles.productDetailBack}
              >
                <BackButton />
              </Link>
              <h2>{gadget.name}</h2>
            </div>
          </div>

          <MainSlider images={gadget.images} />

          <Info gadget={gadget} product={product} />

          <About description={gadget.description} />

          <TechSpecs gadget={gadget} />

          <Recomendation />
        </>
      )}

      {isLoading && !gadget && <div>Loading...</div>}

      {!isLoading && !gadget && !errorMessage && (
        <div>Product was not found</div>
      )}

      {!isLoading && errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};
