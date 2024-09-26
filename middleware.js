import { NextResponse } from "next/server";

export function middleware(req) {
  const { nextUrl } = req;

  // If already on www.sibinfotech.com, no need to redirect
  if (nextUrl.hostname === "www.sibinfotech.com") {
    return NextResponse.next();
  }

  // Redirect only non-www sibinfotech.com to www.sibinfotech.com
  if (nextUrl.hostname === "sibinfotech.com") {
    const url = req.nextUrl.clone();
    url.hostname = "www.sibinfotech.com";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
