import type { StrapiDocument } from './StrapiDocument';

export type StrapiFindOneResult<TAttributes> = {
  data: StrapiDocument<TAttributes> | null;
  meta?: {};
};
