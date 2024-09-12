import { StrapiFindResult } from './types/StrapiFindResult';
import { StrapiFindOneResult } from './types/StrapiFindOneResult';
import { StrapiComponent } from './types/StrapiComponent';
type NextFetchRequestConfig = {
    revalidate?: number | false;
    tags?: string[];
};
type StrapiNestable<T> = T[] | StrapiComponent<T> | StrapiComponent<T>[] | StrapiFindResult<T> | StrapiFindOneResult<T>;
type StrapiQueryable<T> = Required<T> & {
    id: number | string;
};
type StrapiQueryBasicFilter<T> = {
    [key in keyof T]?: T[key] extends StrapiNestable<infer U> ? StrapiQueryBasicFilter<StrapiQueryable<U>> : {
        $eq?: T[key];
        $eqi?: T[key];
        $ne?: T[key];
        $nei?: T[key];
        $lt?: T[key];
        $lte?: T[key];
        $gt?: T[key];
        $gte?: T[key];
        $in?: T[key][];
        $notIn?: T[key][];
        $contains?: T[key];
        $notContains?: T[key];
        $containsi?: T[key];
        $notContainsi?: T[key];
        $null?: boolean;
        $notNull?: boolean;
        $startsWith?: T[key];
        $startsWithi?: T[key];
        $endsWith?: T[key];
        $endsWithi?: T[key];
    };
};
type StrapiPopulate<T> = '*' | {
    [key in keyof T]?: NonNullable<T[key]> extends StrapiNestable<unknown> ? key : never;
}[keyof T][] | {
    [key in keyof T]?: NonNullable<T[key]> extends StrapiNestable<infer TNested> ? '*' | StrapiBaseQuery<TNested> | (TNested extends {
        __component: infer TDynamicComponent;
    } ? TDynamicComponent extends string ? {
        on: {
            [key in TDynamicComponent]?: StrapiBaseQuery<TNested>;
        };
    } : never : never) : never;
};
type StrapiBaseQuery<T> = {
    fields?: (keyof T)[];
    filters?: StrapiQueryBasicFilter<StrapiQueryable<T>> & {
        $and?: StrapiQueryBasicFilter<StrapiQueryable<T>>[];
        $or?: StrapiQueryBasicFilter<StrapiQueryable<T>>[];
        $not?: StrapiQueryBasicFilter<StrapiQueryable<T>>[];
    };
    sort?: keyof T extends string ? (`${keyof T}:asc` | `${keyof T}:desc`)[] : never;
    populate?: StrapiPopulate<T>;
};
type StrapiQuery<TQueryResult> = NonNullable<TQueryResult> extends StrapiNestable<infer TQuery> ? StrapiBaseQuery<TQuery> & {
    locale?: string;
    pagination?: {
        page?: number;
        pageSize?: number;
        withCount?: boolean;
    } | {
        start?: number;
        limit?: number;
        withCount?: boolean;
    };
    status?: 'published' | 'draft';
} : never;
type FetchStrapiConfg<T> = {
    init?: RequestInit;
    next?: NextFetchRequestConfig;
    query?: StrapiQuery<T>;
};
export declare function fetchStrapi<TResult>(path: string, { init, next, query }?: FetchStrapiConfg<TResult>): Promise<TResult>;
export {};
