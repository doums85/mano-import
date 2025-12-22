
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(request: NextRequest) {
  // Define the path for the maintenance page
  const maintenancePath = '/maintenance';

  // Define whitelist paths that should be accessible
  const whitelist = [
    '/app',            // The pro account request page
    maintenancePath,   // The maintenance page itself
    '/_next',          // Next.js static assets
    '/favicon.ico',    // Favicon
    '/public',         // Public folder
    '/api',            // API routes (optional, keep accessible if needed)
    '/file.svg',       // Static assets
    '/globe.svg',
    '/next.svg',
    '/vercel.svg',
    '/window.svg'
  ];

  const { pathname } = request.nextUrl;

  // Check if the current path starts with any of the whitelist paths
  // We use .some() to check if the pathname starts with any item in the whitelist
  // Note: specific check for file extensions or exact matches might be needed depending on structure
  const isWhitelisted = whitelist.some((path) => pathname.startsWith(path));

  // If the path is not whitelisted, redirect to the maintenance page
  if (!isWhitelisted) {
    return NextResponse.redirect(new URL(maintenancePath, request.url));
  }

  return NextResponse.next();
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
};
