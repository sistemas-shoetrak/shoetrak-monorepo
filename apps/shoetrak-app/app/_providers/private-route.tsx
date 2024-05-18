'use client';

import { isPublicRoute } from '@/utils/functions/isPublicRoute';
import { Session } from 'next-auth';
import { redirect, usePathname } from 'next/navigation';

type TPrivateRoute = {
  session: Session | null;
  children: React.ReactNode;
};
export default function PrivateRoute({ session, children }: TPrivateRoute) {
  const pathname = usePathname();

  const isPublicRouter: boolean = isPublicRoute(pathname);

  console.log('isPublicRouter: ', isPublicRouter);

  if (!isPublicRouter && !session) {
    if (pathname !== '/login') {
      redirect('/login');
    }
  }

  return <>{children}</>;
}
