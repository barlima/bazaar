import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const cartCookieId = request.cookies.get("cartId");

  if (!cartCookieId?.value) {
    response.cookies.set("cartId", Math.random().toString(36).slice(2));
  }

  return response;
}
