import { StrapiDocument } from './StrapiDocument';
import type { StrapiPagination } from './StrapiPagination';
export type StrapiFindResult<TAttributes> = {
    data: StrapiDocument<TAttributes>[];
    meta: {
        pagination: StrapiPagination;
    };
};
