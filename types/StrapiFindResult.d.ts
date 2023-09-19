import { StrapiData } from "./StrapiData";
import type { StrapiPagination } from "./StrapiPagination";
export type StrapiFindResult<TAttributes> = {
    data: StrapiData<TAttributes>[];
    meta: {
        pagination: StrapiPagination;
    };
};
