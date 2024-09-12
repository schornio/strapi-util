import type { StrapiStandardAttributes } from './StrapiStandardAttributes';

export type StrapiDocument<TAttributes> = TAttributes &
  StrapiStandardAttributes & {
    documentId: string;
  };
