import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Force the site to serve the Next.js app instead of static files
  if (request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/index', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
} 