import { graphql } from "@/src/gql";

export const creatTweets = graphql(`#graphql
mutation CreateTweet($content: String!, $imageUrl: String) {
  createTweets(content: $content, imageURL: $imageUrl) {
    content
    imageURL
  }
}
`)