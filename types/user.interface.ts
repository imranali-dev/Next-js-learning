import { Document } from 'mongoose';
// we use     extends Document  documents in moongosh if we not then it will create documents in mongodh 

export interface MessageInterface extends Document {
    content: string;
    createdAt: Date;
}

export interface Userinterface extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessages: boolean;
    messages: MessageInterface[];
}



// export interface User {
//     username: string;
//     email: string;
//     password: string;
//     verifyCode: string;
//     verifyCodeExpiry: Date;
//     isVerified: boolean;
//     isAcceptingMessages: boolean;
//     messages: Message[];
//   }
// In this case, User interface is just a plain TypeScript interface. You can use it for type-checking and validation within your application code, but it doesn't have any connection to Mongoose or MongoDB.