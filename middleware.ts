import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

import { NextRequest, NextResponse } from "next/server";
 
let defaultLocale = 'zh-TW'
let locales = ['en-US', 'zh-TW']
 
function getLocale(request: NextRequest) { 
	let headers = { 'accept-language': request.headers.get('accept-language') || defaultLocale }
	let languages = new Negotiator({ headers }).languages()
	return match(languages, locales, defaultLocale)
}
 
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
 
  if (pathnameHasLocale) return
 
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [ 
	'/((?!(?:_next|images)).*)'
 ],
}