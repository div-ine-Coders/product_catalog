import { paginationParams } from '@models/common/paginationParams';

export interface searchParamsStateType {
  query: string | null;
  sort: string | null;
  pagination: paginationParams | null;
}
