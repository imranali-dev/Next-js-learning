import { graphqlClient } from "@/client/api";
import { creatTweets } from "@/graphql/mutation/tweets";

export const creaetweets = async(content: string, imageURL: string)=>{
    try {
      const data = await graphqlClient.request(creatTweets,{
        // imageURL,
        content
      })
      return data
    } catch (error: any) {
        console.error("Error creating user:", error);
       }
}