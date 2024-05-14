import { NextResponse } from 'next/server';

export function middleware(req) {
    const { nextUrl } = req;
    if (nextUrl.hostname === 'sibinfotech.com') {
        const url = req.nextUrl.clone();
        url.hostname = 'www.sibinfotech.com';
        return NextResponse.redirect(url);
    }
    return NextResponse.next();
}
