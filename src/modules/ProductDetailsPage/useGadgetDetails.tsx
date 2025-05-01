import { ProductCategories } from '@constants/productsCategories';
import { Product } from '@models/dto/Product';
import { Gadget } from '@models/Gadget';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export const useGadgetDetails = () => {
  const { productId } = useParams<{ productId: string }>();

  const location = useLocation();
  const segments = location.pathname.split('/');
  const gadgetCategory = segments[1] as ProductCategories;

  const [gadget, setGadget] = useState<Gadget | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const getValidUrl = () => {
    switch (gadgetCategory) {
      case 'phones':
        return '/api/phones.json';
      case 'tablets':
        return '/api/tablets.json';
      case 'accessories':
        return '/api/accessories.json';
      default:
        throw new Error('Unknown category');
    }
  };

  const fetchGadgetDetails = async (id: string | undefined) => {
    try {
      const url = getValidUrl();

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch from ${url}`);
      }

      const data = await response.json();
      const foundItem = (data as Gadget[]).find(item => item.id === id) || null;

      return foundItem;
    } catch {
      setErrorMessage('Something went wrong');

      return null;
    }
  };

  const fetchProductByItemId = async (namespaceId: string | undefined) => {
    try {
      const url = '/api/products.json';

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch from ${url}`);
      }

      const data = await response.json();
      const foundItem =
        (data as Product[]).find(item => item.itemId === namespaceId) || null;

      return foundItem;
    } catch {
      return null;
    }
  };

  const previousGadget = useRef<Gadget | null>(null);
  const previousProduct = useRef<Product | null>(null);

  useEffect(() => {
    const loadDetails = async () => {
      setIsLoading(true);
      const result = await fetchGadgetDetails(productId);
      const resultProduct = await fetchProductByItemId(productId);

      if (result) {
        previousGadget.current = result;
      }

      if (resultProduct) {
        previousProduct.current = resultProduct;
      }

      setGadget(result);
      setProduct(resultProduct);
      setIsLoading(false);
    };

    loadDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  const displayGadget = gadget;
  const displayProduct = product;

  return {
    gadget: displayGadget,
    isLoading,
    errorMessage,
    product: displayProduct,
  };
};
