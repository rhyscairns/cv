import { NextResponse } from 'next/server';

export function middleware (request) {
  const cacheControl = request.headers.get('cache-control');
  console.log(`Request: ${request.method} ${request.nextUrl.pathname}`);
  console.log(`Cache-Control: ${cacheControl || 'No cache header'}`);

  return NextResponse.next();
}
