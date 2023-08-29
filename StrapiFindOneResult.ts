import type { StrapiData } from "./StrapiData";

export type StrapiFindOneResult<TAttributes> = {
  data: StrapiData<TAttributes> | null;
  meta?: {};
};
