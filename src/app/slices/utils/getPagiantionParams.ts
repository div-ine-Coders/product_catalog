import { PaginationPerPage } from '@constants/PaginationPerPage';

export const getPaginationParams = () => {
  const currentUrl = new URL(window.location.href);
  const pageParam = currentUrl.searchParams.get('page');
  const limitParam = currentUrl.searchParams.get(
    'perPage',
  ) as PaginationPerPage;

  const page = pageParam ? parseInt(pageParam, 10) : 1;
  const perPage = limitParam ? parseInt(limitParam, 10) : null;

  return { page, perPage };
};
