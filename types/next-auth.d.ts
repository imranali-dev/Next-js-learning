import 'next-auth';
declare module 'next-auth' {
    // we return the session as we know is session there is is user
    interface Session {
        user: {
            _id?: string;
            isVerified?: boolean;
            isAcceptingMessages?: boolean;
            username?: string;
        } & DefaultSession['user'];
    }
}
// change is user
// this is speciall declare file where we can modified the current user 
declare module 'next-auth' {
    interface User {
        _id?: string;
        isVerified?: boolean;
        isAcceptingMessages?: boolean;
        username?: string;
    }
};



// want to modified the JWT or make the changes in JWT
declare module 'next-auth/jwt' {
    interface JWT {
      _id?: string;
      isVerified?: boolean;
      isAcceptingMessages?: boolean;
      username?: string;
    }
  }