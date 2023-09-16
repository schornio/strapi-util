import { StrapiFindOneResult } from './StrapiFindOneResult';
import { StrapiFindResult } from './StrapiFindResult';

type StrapiImageFields = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  size: number;
  width: number;
  height: number;
};

export type StrapiImageBase = StrapiImageFields & {
  alternativeText: string;
  caption: string;
  formats: {
    [key: string]: StrapiImageFields;
  };
};

export type StrapiImage = StrapiFindOneResult<StrapiImageBase>;

export type StrapiImageCollection = StrapiFindResult<StrapiImageBase>;
