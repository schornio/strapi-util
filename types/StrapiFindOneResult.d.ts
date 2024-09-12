import type { StrapiDocument } from './StrapiDocument';
import { StrapiFindError } from './StrapiFindError';
export type StrapiFindOneResult<TAttributes> = {
    data: StrapiDocument<TAttributes> | StrapiFindError;
    meta?: {};
};
