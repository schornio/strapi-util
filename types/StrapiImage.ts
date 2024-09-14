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

export type StrapiImage = StrapiImageFields & {
  alternativeText: string;
  caption: string;
  formats: {
    [key: string]: StrapiImageFields;
  };
};

export type StrapiImageCollection = StrapiFindResult<StrapiImage>;
