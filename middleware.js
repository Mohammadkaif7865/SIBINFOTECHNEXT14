import { NextResponse } from 'next/server';

export function middleware(request) {
    const { host } = request.nextUrl;
    console.log("DFSDFSDFDFSFSDFSDF", host);
    // if (host === 'sibinfotech.com') {
    //     const url = request.nextUrl.clone();
    //     url.host = 'www.sibinfotech.com';
    //     return NextResponse.redirect(url);
    // }

    return NextResponse.next();
}
