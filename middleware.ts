import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { NextRequest, NextResponse } from "next/server";

let defaultLocale = "zh-TW";
let locales = ["en-US", "zh-TW"];

function getLocale(request: NextRequest) {
  let headers = {
    "accept-language": request.headers.get("accept-language") || defaultLocale,
  };

  let languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (!pathnameHasLocale) {
    const locale = getLocale(request);
    // basePath 根 (pathname 為 "/") 要避免產生 "/zh-TW/" 雙斜線
    request.nextUrl.pathname =
      pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

    return NextResponse.redirect(request.nextUrl);
  }

  return;
}

export const config = {
  // 第一條明確匹配 basePath 根 (/2024)，否則裸根不會進 middleware 而 404
  // 排除 sitemap.xml / robots.txt，否則 metadata route 會被重導到 locale 而 404
  matcher: ["/", "/((?!_next|images|sitemap.xml|robots.txt).*)"],
};
