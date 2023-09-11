import { stringify } from 'qs';
import { StrapiFindResult } from './types/StrapiFindResult';
import { StrapiFindOneResult } from './types/StrapiFindOneResult';
import { StrapiComponent } from './types/StrapiComponent';

const { STRAPI_ENDPOINT } = process.env;

type NextFetchRequestConfig = {
  revalidate?: number | false;
  tags?: string[];
};

type NextFetchRequestInit = RequestInit & {
  next?: NextFetchRequestConfig | undefined;
};

export type StrapiNestable<T> =
  | StrapiComponent<T>
  | StrapiComponent<T>[]
  | StrapiFindResult<T>
  | StrapiFindOneResult<T>;

type StrapiQueryBasicFilter<T> = {
  [key in keyof T]?: T[key] extends StrapiNestable<infer U>
    ? StrapiQueryBasicFilter<U>
    : {
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

export type StrapiPopulate<T> =
  | '*'
  | {
      [key in keyof T]?: NonNullable<T[key]> extends StrapiNestable<unknown>
        ? key
        : never;
    }[keyof T][]
  | {
      [key in keyof T]?: NonNullable<T[key]> extends StrapiNestable<
        infer TNested
      >
        ?
            | '*'
            | StrapiBaseQuery<TNested>
            | (TNested extends { __component: infer TDynamicComponent }
                ? TDynamicComponent extends string
                  ? {
                      on: {
                        [key in TDynamicComponent]?: StrapiBaseQuery<TNested>;
                      };
                    }
                  : never
                : never)
        : never;
    };

type StrapiBaseQuery<T> = {
  fields?: (keyof T)[];
  filters?: StrapiQueryBasicFilter<Required<T>> & {
    $and?: StrapiQueryBasicFilter<T>[];
    $or?: StrapiQueryBasicFilter<T>[];
    $not?: StrapiQueryBasicFilter<T>[];
  };
  sort?: keyof T extends string
    ? (`${keyof T}:asc` | `${keyof T}:desc`)[]
    : never;
  populate?: StrapiPopulate<T>;
};

type StrapiQuery<T> = StrapiBaseQuery<T> & {
  locale?: string;
  pagination?:
    | {
        page?: number;
        pageSize?: number;
        withCount?: boolean;
      }
    | {
        start?: number;
        limit?: number;
        withCount?: boolean;
      };
  publicationState?: 'live' | 'preview';
};

export type FetchStrapiConfg<T> = {
  init?: RequestInit;
  next?: NextFetchRequestConfig;
  query?: StrapiQuery<T>;
};

export async function fetchStrapi<TResult>(
  path: string,
  { init, next, query }: FetchStrapiConfg<TResult> = {},
) {
  const queryString = stringify(query);
  const requestInit = {
    ...init,
    next,
  } satisfies NextFetchRequestInit;
  const response = await fetch(
    `${STRAPI_ENDPOINT}/api${path}${queryString}`,
    requestInit,
  );
  return (await response.json()) as TResult;
}
