import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { middlewareRouteConfig, routeConfig } from '@shared/config'
import { tokenKey } from '@shared/constant'

export function middleware(request: NextRequest) {
  const hasToken =
    typeof request.cookies.get('token')?.value !== 'undefined' &&
    request.cookies.get('token')?.value

  if (
    (middlewareRouteConfig.protectedRoutes.includes(request.nextUrl.pathname) &&
      !hasToken) ||
    request?.nextUrl?.pathname === routeConfig.ACCOUNT.UNAUTHORIZED
  ) {
    request.cookies.delete('token')
    const response = NextResponse.redirect(
      new URL(routeConfig.ACCOUNT.AUTH.SIGN_IN, request.url)
    )
    response.cookies.delete('token')
    return response
  }

  if (
    middlewareRouteConfig.authRoutes.includes(request.nextUrl.pathname) &&
    hasToken
  )
    return NextResponse.redirect(
      new URL(routeConfig.ACCOUNT.INDEX, request.url)
    )
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
