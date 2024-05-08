// Now what are the middlewares 
// i want to say 
// Jany sy PHly mil ky jana 
// basically i means that check i want that i want to access which routes
// it will check every route

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware"
export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request });
    const url = request.nextUrl;
    if (
        token &&
        (url.pathname.startsWith('/sign-in') ||
            url.pathname.startsWith('/sign-up') ||
            url.pathname.startsWith('/verify') ||
            url.pathname === '/')
    ) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    if (!token && url.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }
}

export const config = {
    // here i want that where my middleware will be run for example i want that if the user
    // is not sign in we will sign in first
    //    if user is not login
    matcher: [
        '/dashboard/:path*',
        '/sign-in',
        '/sign-up', '/',
        '/verify/:path*'],
};