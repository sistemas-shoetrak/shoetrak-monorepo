import { APP_ROUTES } from '../constants';

export const isPublicRoute = (pathname: string) => {
  const publicRoutes = Object.values(APP_ROUTES.public);

  return publicRoutes.some((route) => route.name === pathname);
};
