import { graphqlClient } from "@/client/api";
import { loginusers } from "@/graphql/query/Users";

export const loginapi = async(email: string,password: string)=>{
    try {
        const data = await graphqlClient.request(loginusers,{
            password,
            email
        })
        console.log("User created:",data);
        const token = data.getUserToken;
        // here must extract the token from the the user data bcs i was getting the error that it is not a string and getting the token in this way 
        // User created: {getUserToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsd…yOTd9.PM8mYzij0AKLitCdQkjHVEInSykMjyal6cXPCrAqXXg'}
        // it was true but  const token = data.getUserToken; additional to fix this error  //Token received is not a string: 
         if (token) {
            return token; // Return the token if available
          } else {
            throw new Error("Token not found in response");
          }
    } catch (error: any) {
     console.error("Error creating user:", error);
    }
}