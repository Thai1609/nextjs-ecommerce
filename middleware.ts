import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  console.log("Middleware is running");

  const { pathname } = req.nextUrl;
  const secret = process.env.NEXTAUTH_SECRET;

  // Get tokens kiểm tra xem người dùng đã đăng nhập chưa
  const token = await getToken({ req, secret });

  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // if (!token) {
  //   if (!pathname.startsWith("/auth")) {
  //     return NextResponse.redirect(new URL("/auth/account/login", req.url));
  //   }
  // }

  if (token && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/photos", req.url));
  }
}

// Định nghĩa các đường dẫn mà middleware sẽ áp dụng
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
