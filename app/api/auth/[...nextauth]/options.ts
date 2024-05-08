import { dbconnection } from "@/lib/debconnection";
import UserModel from "@/model/users.model";
import { NextAuthOptions } from "next-auth";
import bcrypt from 'bcryptjs';
import CredentialsProvider from "next-auth/providers/credentials";

export const Authoptions: NextAuthOptions = {
    
    // so here first of all we need to tell what type of provider this will be in the form of array
    providers: [
        // what type of Credentials Needs 
        // learn it about by visitng credtional pages
        // here first of all we need to work on  CredentialsProvider1st number
        CredentialsProvider({
            name: "Credentials",
            id: "Credentials",
            credentials: {
                // this will be we are giving in this way bcs this will create the html page behide it so thats why we will proivde creditional for creating the 
                // html page of username and pssword
                email: { label: "email", type: "email", placeholder: "imranali.dev@proton.me" },
                password: { label: "Password", type: "password" }
            },
            // now authorize  want to know what we need to do 
            //  you have take credentials as parmeter 
            // and return a promise
            async authorize(credentials: any, req): Promise<any> {
                await dbconnection();
                try {
                    const user = await UserModel.findOne({
                        // this is the mongosh or operater basically we use it when we need  multiple things 
                        $or: [
                            { email: credentials.identifier.email },
                            { username: credentials.identifier.username }
                        ]
                    });

                    // if if the user not found with email and username
                    if (!user) {
                        throw new Error('No user found with this email');
                    };
                    // here we will check that if the user is exist but not verified then also throw new error 
                    if (!user.isVerified) {
                        throw new Error('Please verify your account before logging in');
                    }
                    // match the password using bycrotjs
                    const isPasswordCorrect = await bcrypt.compare(

                        credentials.password,
                        user.password
                    );

                    if (isPasswordCorrect) {
                        return user;
                    } else {
                        throw new Error('Incorrect password');
                    }
                } catch (error: any) {
                    throw new Error(error)
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            // now here the problem the user maybe exist or or for checking parpose we need to check the user 
            if (user) {
                token._id = user._id?.toString(); // Convert ObjectId to string  i will get the data in the object { } but this thing will convert it in to string
                token.isVerified = user.isVerified;
                token.isAcceptingMessages = user.isAcceptingMessages;
                token.username = user.username;
            }
            return token
        },
        async session({ session, user, token }) {
            if (token) {
                session.user._id = token._id;
                session.user.isVerified = token.isVerified;
                session.user.isAcceptingMessages = token.isAcceptingMessages;
                session.user.username = token.username;
            }
            return session
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },

    
    pages: {
        signIn: '/sign-in',
        signOut: '/sign-out',
        error: '/error', // Error code passed in query string as ?error=
        verifyRequest: '/verify-request', // (used for check email message)
        newUser: '/auth/new-user'
    },
    // here want to check where is the user

}