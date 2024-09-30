// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const { nextUrl } = req;

  // Check if the request is using HTTP and redirect to HTTPS
  // if (nextUrl.protocol === "http:") {
  //   const url = req.nextUrl.clone();
  //   url.protocol = "https:";
  //   return NextResponse.redirect(url);
  // }

  // Redirect from sibinfotech.com to www.sibinfotech.com
  if (nextUrl.hostname === "sibinfotech.com") {
    const url = req.nextUrl.clone();
    url.hostname = "www.sibinfotech.com";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
