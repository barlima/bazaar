import { NextResponse } from "next/server";
import { initCart } from "./features/cart/actions/initCart";

export async function middleware() {
  console.log("middleware");

  try {
    const { data: cart, error } = await initCart();

    console.log(cart, error);

    if (error || !cart) {
      return NextResponse.next();
    }

    const response = NextResponse.next();
    response.cookies.set("cartId", cart.id.toString());

    return response;
  } catch (error) {
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
  missing: [{ type: "cookie", key: "cartId" }],
};
