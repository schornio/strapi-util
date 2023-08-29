export type StrapiSingleMedia = {
  alternativeText: string;
  formats: {
    [key: string]: StrapiSingleMedia;
  } | null;
  url: string;
};
