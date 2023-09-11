# @schornio/strapi-util

```
npm i @schornio/strapi-util
```

## `fetchStrapi``

Example usage

```ts
import { fetchStrapi } from '@schornio/strapi-util/fetchStrapi';
import { StrapiFindOneResult } from '@schornio/strapi-util/types/StrapiFindOneResult';
import { StrapiFindResult } from '@schornio/strapi-util/types/StrapiFindResult';

type Page = {
  title: string;
  content: string;
  slug: string;
};

export async function getPages() {
  return await fetchStrapi<StrapiFindResult<Page>>('/pages');
}

export async function getPage(slug: string) {
  return await fetchStrapi<StrapiFindOneResult<Page>>(`/pages/${slug}`);
}

export function fetchPageComplexQuery(slug: string) {
  return fetchStrapi<Page>(`/pages/${slug}`, {
    query: {
      fields: ['title', 'description', 'image', 'content', 'slug'],
      filters: {
        title: {
          $eq: 'test',
        },
        content: {
          text: {
            $eq: 'test',
          },
        },
      },
      locale: 'de',
      pagination: {
        page: 1,
        pageSize: 10,
      },
      populate: {
        content: {
          on: {
            'content.hero': {
              populate: ['image'],
            },
          },
        },
        image: '*',
      },
      publicationState: 'live',
      sort: ['title:asc'],
    },
  });
}

// Even with nextjs config
export async function getPagesCached() {
  return await fetchStrapi<StrapiFindResult<Page>>('/pages', {
    next: {
      revalidate: 60,
      tags: ['pages'],
    },
  });
}
```
