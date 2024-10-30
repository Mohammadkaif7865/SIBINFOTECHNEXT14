// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const { nextUrl } = req;
  const url = req.nextUrl.clone();

  // Redirect HTTP and non-www to HTTPS and www in a single step
  if (nextUrl.protocol === "http:" || nextUrl.hostname === "sibinfotech.com") {
    url.protocol = "https:";
    url.hostname = "www.sibinfotech.com";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
