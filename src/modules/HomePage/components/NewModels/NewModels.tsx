import React, { useEffect, useState } from 'react';
// eslint-disable-next-line max-len
import { SliderForProduct } from '../../../_shared/components/organisms/SliderForProduct/SliderForProduct';
import { Product } from '@models/dto/Product';

export const BrandNewModels = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNewModels = async () => {
      try {
        const response = await fetch('/api/newModel.json');
        const data: Product[] = await response.json();

        const sortedByYear = data.sort((a, b) => b.year - a.year);

        setProducts(sortedByYear);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to load new models:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewModels();
  }, []);

  if (isLoading) {
    return <p>Loading new models...</p>; // тут вставити лоадер треба, або видалити
  }

  return <SliderForProduct title="Brand New Models" products={products} />;
};
