/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageURL?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CommentsonPosts?: Maybe<Comment>;
  createTweets?: Maybe<Tweet>;
  createUser?: Maybe<User>;
  delCommentsonPosts?: Maybe<Scalars['String']['output']>;
  deleteTweet?: Maybe<Scalars['String']['output']>;
  fellowuser?: Maybe<Scalars['Boolean']['output']>;
  likePost?: Maybe<Scalars['Boolean']['output']>;
  unfellowuser?: Maybe<Scalars['Boolean']['output']>;
  unlikepost?: Maybe<Scalars['Boolean']['output']>;
  updateCommentsonPosts?: Maybe<Comment>;
  updateTweet?: Maybe<Tweet>;
};


export type MutationCommentsonPostsArgs = {
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  imageURL?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateTweetsArgs = {
  content: Scalars['String']['input'];
  imageURL?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};


export type MutationDelCommentsonPostsArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTweetArgs = {
  id: Scalars['String']['input'];
};


export type MutationFellowuserArgs = {
  to: Scalars['ID']['input'];
};


export type MutationLikePostArgs = {
  to: Scalars['ID']['input'];
};


export type MutationUnfellowuserArgs = {
  to: Scalars['ID']['input'];
};


export type MutationUnlikepostArgs = {
  to: Scalars['ID']['input'];
};


export type MutationUpdateCommentsonPostsArgs = {
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  imageURL?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateTweetArgs = {
  content: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAllTweets?: Maybe<Array<Maybe<Tweet>>>;
  getCurrentLoggedInUser?: Maybe<User>;
  getUserToken?: Maybe<Scalars['String']['output']>;
};


export type QueryGetUserTokenArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Tweet = {
  __typename?: 'Tweet';
  author?: Maybe<User>;
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageURL?: Maybe<Scalars['String']['output']>;
};

export type TweetsSechma = {
  __typename?: 'TweetsSechma';
  content: Scalars['String']['output'];
  imageURL?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  Tweet?: Maybe<Array<Maybe<Tweet>>>;
  email: Scalars['String']['output'];
  fellower?: Maybe<Array<Maybe<User>>>;
  fellowing?: Maybe<Array<Maybe<User>>>;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  profileImageURL?: Maybe<Scalars['String']['output']>;
};

export type CreateTweetMutationVariables = Exact<{
  content: Scalars['String']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateTweetMutation = { __typename?: 'Mutation', createTweets?: { __typename?: 'Tweet', content: string, imageURL?: string | null } | null };

export type MutationMutationVariables = Exact<{
  firstName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
}>;


export type MutationMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string, firstName: string, lastName?: string | null, email: string, profileImageURL?: string | null } | null };

export type QueryQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type QueryQuery = { __typename?: 'Query', getUserToken?: string | null };

export type CurrentUserQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQueryQuery = { __typename?: 'Query', getCurrentLoggedInUser?: { __typename?: 'User', id: string, firstName: string, lastName?: string | null, email: string, profileImageURL?: string | null } | null };


export const CreateTweetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTweet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageUrl"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTweets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"Argument","name":{"kind":"Name","value":"imageURL"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageUrl"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}}]}}]}}]} as unknown as DocumentNode<CreateTweetMutation, CreateTweetMutationVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURL"}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const CurrentUserQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrentUserQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentLoggedInUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageURL"}}]}}]}}]} as unknown as DocumentNode<CurrentUserQueryQuery, CurrentUserQueryQueryVariables>;