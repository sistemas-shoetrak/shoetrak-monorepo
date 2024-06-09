import { db } from '@/app/_lib/prisma';

export async function GetAllCustomers() {
  try {
    const recentCustomers = await db.customer.findMany({
      take: 5,
      orderBy: {
        created_at: 'desc',
      },
    });

    const customer = recentCustomers.map((customer) => {
      return {
        id: customer.id,
        label: customer.fullName,
        value: customer.fullName,
      };
    });

    return customer;
  } catch (error) {
    console.error('error: ', error);
  }
}
