import { authOptions } from '@/app/_lib/auth';
import { getServerSession } from 'next-auth';

export async function GetSession() {
  const session = await getServerSession(authOptions);

  return session;
}
