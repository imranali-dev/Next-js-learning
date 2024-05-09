import { Authoptions } from "@/api/auth/[...nextauth]/options";
import { dbconnection } from "@/lib/debconnection";
import UserModel from "@/model/users.model";
import mongoose from "mongoose";
import { User, getServerSession } from "next-auth";

export async function GET(request: Request) {
    await dbconnection()
    const session = await getServerSession(Authoptions);
    const _user: User = session?.user;

    if (!session || !_user) {
        return Response.json(
            { success: false, message: 'Not authenticated' },
            { status: 401 }
        );
    }
    const userId = new mongoose.Types.ObjectId(_user._id);
    try {
        // using aggregation first tome first of it should be array 
        const user = await UserModel.aggregate([
            // now we have might my 1000's of users but we need to find the unique user with its id
            { $match: { id: userId } }, // this will return the user of this specific id 
            //now we have the array of users but we need to convert it in to object
            // so we need to use unwind that convert the Array in to objects
            // in this i can do operation like sorting
            // {$unwind:'$messages'} this line basicallly gives the array of message ojject 
            //  try it with user 
            { $unwind: '$messages' },
            { $sort: { 'messages.createdAt': -1 } },
            // get the id then in this line push line
            { $group: { _id: '$_id', messages: { $push: '$messages' } } },

        ]).exec();
        if (!user || user.length === 0) {
            return Response.json(
                { message: 'User not found', success: false },
                { status: 404 }
            );
        }
        return Response.json(
            { messages: user[0].messages },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error('An unexpected error occurred:', error);
        return Response.json(
            { message: 'Internal server error', success: false },
            { status: 500 }
        );
    }
}