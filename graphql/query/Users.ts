

import { graphql } from "@/src/gql";
export const loginusers = graphql(`
query Query($email: String!, $password: String!) {
    getUserToken(email: $email, password: $password)
  }
  
`)
export const currenUset = graphql(`
query CurrentUserQuery{
  getCurrentLoggedInUser {
    id
    firstName
    lastName
    email
    profileImageURL
  }
}
`)