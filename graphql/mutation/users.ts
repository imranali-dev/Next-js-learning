import { graphql } from '@/src/gql'

export const CreateUsers = graphql(`#graphql
mutation Mutation($firstName: String!, $email: String!, $password: String!, $lastName: String) {
    createUser(firstName: $firstName, email: $email, password: $password, lastName: $lastName) {
      id
      firstName
      lastName
      email
      profileImageURL
    }
  }
`);





// first do it in this way then import in another way
// this is when we run npm run codegen in the cli