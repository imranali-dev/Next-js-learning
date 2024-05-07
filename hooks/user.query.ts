import { graphqlClient } from "@/client/api"
import { currenUset } from "@/graphql/query/Users"
import { useQuery } from "@tanstack/react-query"

export const useCurrentUser = () =>{
    const query = useQuery({
        queryKey:['currentUser'],
        queryFn:()=>{
            return graphqlClient.request(currenUset)
        }
    })
    return {...query,user:query.data?.getCurrentLoggedInUser}
}