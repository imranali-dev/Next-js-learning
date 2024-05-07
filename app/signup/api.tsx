import { graphqlClient } from "@/client/api";
import { CreateUsers } from "@/graphql/mutation/users";
export const handlelogin = async (
    firstName: string,
    email: string,
    password: string,
    lastName:string,
) => {
    try {
        const data = await graphqlClient.request(CreateUsers, {
            firstName,
            email,
            password,
            lastName,
        })
        console.log("User created:", data.createUser);
    } catch (error: any) {
        console.error("Error creating user:", error);
    }
};
