import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import { NextResponse } from 'next/server';
import { authOptions } from './app/_lib/auth';

export { default } from 'next-auth/middleware';

export async function middleware(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  //   const session = await getServerSession(authOptions);

  if (!session) {
    console.log('rato: ', session);

    return NextResponse.redirect(new URL('/', req.url));
  }

  // O usuário está autenticado, prossiga para a próxima rota
  return true;
}

export const config = {
  matcher: ['/dashboard/:path*', '/orders/:path*'],
};
