/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
  'query BlogPost($locale: I18NLocaleCode!, $slug: String!) {\n  blogs(filters: {slug: {eq: $slug}}, locale: $locale) {\n    data {\n      id\n      attributes {\n        title\n        content\n        author\n        slug\n        isFromSmartFloor\n        publishedAt\n        postImage {\n          data {\n            attributes {\n              formats\n            }\n          }\n        }\n        SEO {\n          metaTitle\n          metaDescription\n        }\n      }\n    }\n  }\n}':
    types.BlogPostDocument,
  'query BlogPosts($locale: I18NLocaleCode!) {\n  blogs(locale: $locale) {\n    data {\n      id\n      attributes {\n        title\n        slug\n        postImage {\n          data {\n            attributes {\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}':
    types.BlogPostsDocument,
  'query OurRealizations($locale: I18NLocaleCode!) {\n  ourRealizations(locale: $locale, sort: "id:desc") {\n    data {\n      id\n      attributes {\n        objectName\n        job\n        material\n        space\n        area\n        mainImage {\n          data {\n            attributes {\n              formats\n            }\n          }\n        }\n        photos {\n          data {\n            attributes {\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}':
    types.OurRealizationsDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query BlogPost($locale: I18NLocaleCode!, $slug: String!) {\n  blogs(filters: {slug: {eq: $slug}}, locale: $locale) {\n    data {\n      id\n      attributes {\n        title\n        content\n        author\n        slug\n        isFromSmartFloor\n        publishedAt\n        postImage {\n          data {\n            attributes {\n              formats\n            }\n          }\n        }\n        SEO {\n          metaTitle\n          metaDescription\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query BlogPost($locale: I18NLocaleCode!, $slug: String!) {\n  blogs(filters: {slug: {eq: $slug}}, locale: $locale) {\n    data {\n      id\n      attributes {\n        title\n        content\n        author\n        slug\n        isFromSmartFloor\n        publishedAt\n        postImage {\n          data {\n            attributes {\n              formats\n            }\n          }\n        }\n        SEO {\n          metaTitle\n          metaDescription\n        }\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query BlogPosts($locale: I18NLocaleCode!) {\n  blogs(locale: $locale) {\n    data {\n      id\n      attributes {\n        title\n        slug\n        postImage {\n          data {\n            attributes {\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query BlogPosts($locale: I18NLocaleCode!) {\n  blogs(locale: $locale) {\n    data {\n      id\n      attributes {\n        title\n        slug\n        postImage {\n          data {\n            attributes {\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query OurRealizations($locale: I18NLocaleCode!) {\n  ourRealizations(locale: $locale, sort: "id:desc") {\n    data {\n      id\n      attributes {\n        objectName\n        job\n        material\n        space\n        area\n        mainImage {\n          data {\n            attributes {\n              formats\n            }\n          }\n        }\n        photos {\n          data {\n            attributes {\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query OurRealizations($locale: I18NLocaleCode!) {\n  ourRealizations(locale: $locale, sort: "id:desc") {\n    data {\n      id\n      attributes {\n        objectName\n        job\n        material\n        space\n        area\n        mainImage {\n          data {\n            attributes {\n              formats\n            }\n          }\n        }\n        photos {\n          data {\n            attributes {\n              formats\n            }\n          }\n        }\n      }\n    }\n  }\n}']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
