// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const { nextUrl } = req;

  // Check if the request is using HTTP and redirect to HTTPS
  if (nextUrl.protocol === "http:") {
    const url = req.nextUrl.clone();
    url.protocol = "https:";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
