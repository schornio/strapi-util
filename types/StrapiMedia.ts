import { StrapiFindOneResult } from './StrapiFindOneResult';
import { StrapiFindResult } from './StrapiFindResult';

export type StrapiMediaBase = {
  alternativeText: string;
  formats: {
    [key: string]: StrapiMediaBase;
  } | null;
  url: string;
};

export type StrapiMedia = StrapiFindOneResult<StrapiMediaBase>;

export type StrapiMediaCollection = StrapiFindResult<StrapiMediaBase>;
