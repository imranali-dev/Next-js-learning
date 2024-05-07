import { MessageInterface, Userinterface } from "@/types/user.interface";
import mongoose, { Schema } from "mongoose";

// now bcs we are using Ts so that why  Schema<MessageInterface>
// Basically its means that This will fellow the Sechma 
// Actuallly it will fellow the sechma want to fellow the 
// and <MessageInterface>  say which sechma need to fellow 
const MessageSechma: Schema<MessageInterface> = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});
// here trim Will remove the extra lines of spacing if there any space trime will remove it 
// Match /.+\@.+\..+/  this is the Ragex we use it for so the user will enter the correct name
// Match basically is from the moonshos
const Usersechma: Schema<Userinterface> = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/.+\@.+\..+/, 'Please use a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    verifyCode: {
        type: String,
        required: [true, 'Verify Code is required'],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, 'Verify Code Expiry is required'],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAcceptingMessages: {
        type: Boolean,
        default: true,
    },
    messages: [MessageSechma],
});
// we can also use it in this way but this is not the good pracise as  it will check again and again so every time Consider its new sechma file so use ts to avoid it 
// Next js will not Know its running first Time 
// so thats why or or || Model 
// const UserModel = mongoose.model("User",Usersechma)
// it will check it  User  then if created then it will not create if created then create new if not use then every then its create the new one
const UserModel = (mongoose.models.User as mongoose.Model<Userinterface>) || mongoose.model("User", Usersechma);
export default UserModel;