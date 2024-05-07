/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "#graphql\nmutation CreateTweet($content: String!, $imageUrl: String) {\n  createTweets(content: $content, imageURL: $imageUrl) {\n    content\n    imageURL\n  }\n}\n": types.CreateTweetDocument,
    "#graphql\nmutation Mutation($firstName: String!, $email: String!, $password: String!, $lastName: String) {\n    createUser(firstName: $firstName, email: $email, password: $password, lastName: $lastName) {\n      id\n      firstName\n      lastName\n      email\n      profileImageURL\n    }\n  }\n": types.MutationDocument,
    "\nquery Query($email: String!, $password: String!) {\n    getUserToken(email: $email, password: $password)\n  }\n  \n": types.QueryDocument,
    "\nquery CurrentUserQuery{\n  getCurrentLoggedInUser {\n    id\n    firstName\n    lastName\n    email\n    profileImageURL\n  }\n}\n": types.CurrentUserQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nmutation CreateTweet($content: String!, $imageUrl: String) {\n  createTweets(content: $content, imageURL: $imageUrl) {\n    content\n    imageURL\n  }\n}\n"): (typeof documents)["#graphql\nmutation CreateTweet($content: String!, $imageUrl: String) {\n  createTweets(content: $content, imageURL: $imageUrl) {\n    content\n    imageURL\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nmutation Mutation($firstName: String!, $email: String!, $password: String!, $lastName: String) {\n    createUser(firstName: $firstName, email: $email, password: $password, lastName: $lastName) {\n      id\n      firstName\n      lastName\n      email\n      profileImageURL\n    }\n  }\n"): (typeof documents)["#graphql\nmutation Mutation($firstName: String!, $email: String!, $password: String!, $lastName: String) {\n    createUser(firstName: $firstName, email: $email, password: $password, lastName: $lastName) {\n      id\n      firstName\n      lastName\n      email\n      profileImageURL\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery Query($email: String!, $password: String!) {\n    getUserToken(email: $email, password: $password)\n  }\n  \n"): (typeof documents)["\nquery Query($email: String!, $password: String!) {\n    getUserToken(email: $email, password: $password)\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery CurrentUserQuery{\n  getCurrentLoggedInUser {\n    id\n    firstName\n    lastName\n    email\n    profileImageURL\n  }\n}\n"): (typeof documents)["\nquery CurrentUserQuery{\n  getCurrentLoggedInUser {\n    id\n    firstName\n    lastName\n    email\n    profileImageURL\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;