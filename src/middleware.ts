import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const currentUser = request.cookies.get(
    "__Secure-next-auth.session-token"
  )?.value;

  if (currentUser && !request.nextUrl.pathname.startsWith("/dashboard")) {
    return Response.redirect(new URL("/dashboard", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
