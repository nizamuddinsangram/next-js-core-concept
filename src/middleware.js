import { NextResponse } from "next/server";
const user = false;
export function middleware(request) {
  let cookie = request.cookies.get("token");
  if (!cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about",
};
