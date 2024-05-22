import { db } from '@/app/_lib/prisma';

export async function GetRecentCustomers() {
  try {
    const recentCustomers = await db.customer.findMany({
      take: 5,
      orderBy: {
        created_at: 'desc',
      },
    });

    return recentCustomers;
  } catch (error) {
    console.error('error: ', error);
  }
}
