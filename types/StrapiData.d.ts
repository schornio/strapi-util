import type { StrapiStandardAttributes } from './StrapiStandardAttributes';
export type StrapiData<TAttributes> = {
    attributes: TAttributes & StrapiStandardAttributes;
    id: number;
};
