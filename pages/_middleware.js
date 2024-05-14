// In your pages/_middleware.js file in Next.js
import { NextResponse } from 'next/server';

export function middleware(request) {
    const { host } = request.nextUrl;

    if (host === 'sibinfotech') {
        const url = request.nextUrl.clone();
        url.host = 'www.sibinfotech.com';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}
