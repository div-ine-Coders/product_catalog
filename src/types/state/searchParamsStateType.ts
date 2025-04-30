import { PaginationParams } from '@models/common/PaginationParams';

export interface SearchParamsStateType {
  query: string | null;
  sort: string | null;
  pagination: PaginationParams | null;
}
