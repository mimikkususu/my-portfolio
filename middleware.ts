import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'jp']
const defaultLocale = 'jp' // デフォルトを jp に設定

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // すでに /en や /jp が付いている場合は何もしない
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )
    if (pathnameHasLocale) return

    // 付いていない場合はデフォルトの /jp にリダイレクト
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    // 静的ファイルやアイコンを除外する設定
    matcher: ['/((?!_next/static|_next/image|favicon.ico|public).*)'],
}