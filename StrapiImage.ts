type StrapiImageBase = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  size: number;
  width: number;
  height: number;
};

export type StrapiImage = StrapiImageBase & {
  alternativeText: string;
  caption: string;
  formats: {
    [key: string]: StrapiImageBase;
  };
};
