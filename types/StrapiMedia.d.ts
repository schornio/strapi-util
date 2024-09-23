import { StrapiFindResult } from './StrapiFindResult';
export type StrapiMedia = {
    alternativeText?: string | null;
    caption?: string | null;
    formats: {
        [key: string]: StrapiMedia;
    } | null;
    mime: string;
    url: string;
};
export type StrapiMediaCollection = StrapiFindResult<StrapiMedia>;
