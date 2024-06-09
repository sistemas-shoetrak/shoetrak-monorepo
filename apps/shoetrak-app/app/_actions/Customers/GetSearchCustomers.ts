import { db } from '@/app/_lib/prisma';
import { Customer } from '../../../../../packages/data-domain/dist';

export async function GetSearchCustomers(
  customerName: string
): Promise<Customer[]> {
  const customers = await db.customer.findMany({
    take: 5,
    orderBy: {
      created_at: 'desc',
    },
    where: {
      fullName: {
        contains: customerName,
      },
    },
  });

  return customers;
}
