// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   console.log("middleware: " + req.url); // リクエストURLをログ出力し

//   return NextResponse.next(); // 通常のサーバーサイド処理に移る
// }
// // リダイレクトやエラーを返したりすると通常のサーバサイド処理に到達する前に
// // ブラウザにレスポンスが返される

// // ミドルウェアを適用するパスを指定「マッチャー」
// // {}が空の場合はすべてのパスに適用するという意味
// export const config = {
//     matcher: ["/about/:path*","/dashboard/:path*"], // 特定のパスとマッチするときのみミドルウェアを適用
// };

import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";
import { matchesGlob } from "path";

export const middleware = createNextAuthMiddleware();

export const config = {
  matcher: ["/(.*)"], // すべてのパスにミドルウェアを適用
};
