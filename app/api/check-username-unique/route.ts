import { dbconnection } from "@/lib/debconnection";
import UserModel from "@/model/users.model";
import { usernameValidation } from "@/sechmas/Validations/signup";
import { z } from "zod";

const checkUserNameQuery = z.object({
    username: usernameValidation
});

export async function name(request: Request) {
    await dbconnection();
    try {
        // check the user form quesy
        // check the username from url 
        // now we will apply the query 
        // there is the diffrent way to search param
        // like in node req.query.params from the url
        const { searchParams } = new URL(request.url)
        //   this will basically extractact the username
        // now i only need the user name so pass username
        // must pass in the object form 
        const queryParam = {
            username: searchParams.get('username')
        };
        // now its time to validated the username
        // first of check the username validation sechma   => this basically checks => checkUserNameQuery
        // safeParse is basicallly used when the sechma will be fellowed then it will be return the reult 
        // safeParse  it will check the sechma in our database 
        //safeParse we directly use it from database
        // safeParse: if it correct then return the result
        const result = checkUserNameQuery.safeParse(queryParam)
        if (!result.success) {
            // this code snippet basically extractc the code from  errors of usernames
            const usernamesErrors = result.error.format().username?._errors || []
            return Response.json({
                success: false,
                message: 'Error usernamesErrors ',
            },
                {
                    status: 400
                })
            }
            const {username} = result.data;
            const user = await UserModel.findOne({
                username,
                isVerified:true
            })
            if(user){
                return Response.json({
                    success: false,
                    message: 'User Name is already Taken',
                },
                    {
                        status: 400
                    })
            }

    } catch (error) {
        console.error('Error Validiating UserName:', error);
        return Response.json({
            success: false,
            message: 'Error Validiating UserName',
        },
            {
                status: 500
            })
    }
}