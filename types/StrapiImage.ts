import { StrapiFindOneResult } from './StrapiFindOneResult';

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
