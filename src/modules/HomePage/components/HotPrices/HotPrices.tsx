import React, { useEffect, useState } from 'react';
// eslint-disable-next-line max-len
import { SliderForProduct } from 'modules/_shared/components/organisms/SliderForProduct/SliderForProduct';
import { Product } from '@models/dto/Product';

export const HotPrices = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHotPrices = async () => {
      try {
        const response = await fetch('/api/hotPrices.json');
        const data: Product[] = await response.json();

        const sortedByDiscount = data.sort(
          (a, b) => b.fullPrice - b.price - (a.fullPrice - a.price),
        );

        setProducts(sortedByDiscount);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to load hot prices:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHotPrices();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>; //свій лоадер, або залишити лише глобальний
  }

  return <SliderForProduct title="Hot Prices" products={products} />;
};
