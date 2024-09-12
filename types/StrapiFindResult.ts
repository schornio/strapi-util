import { StrapiDocument } from './StrapiDocument';
import { StrapiFindError } from './StrapiFindError';
import type { StrapiPagination } from './StrapiPagination';

export type StrapiFindResult<TAttributes> =
  | {
      data: StrapiDocument<TAttributes>[];
      meta: {
        pagination: StrapiPagination;
      };
    }
  | StrapiFindError;
