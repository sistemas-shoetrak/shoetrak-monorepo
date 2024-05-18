import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { authOptions } from './app/_lib/auth';

export { default } from 'next-auth/middleware';

export async function middleware(request: NextRequest) {
  const requestForNextAuth = {
    headers: {
      cookie: request.headers.get('cookie') ?? undefined,
    },
  };
  const session = await getSession({ req: requestForNextAuth });

  console.log('session do midd: ', session);

  if (!session) {
    if (request.nextUrl.pathname === '/') {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/', request.url));
  }

  // O usuário está autenticado, prossiga para a próxima rota
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/orders/:path*'],
};
