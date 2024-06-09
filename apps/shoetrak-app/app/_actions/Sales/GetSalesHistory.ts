import { db } from '@/app/_lib/prisma';

export async function GetSalesHistory() {
  try {
    const salesHistory = await db.sale.findMany({
      take: 5,
      select: {
        id: true,
        total: true,
        updatedAt: true,
        customer: {
          select: {
            fullName: true,
            email: true,
            phone: true,
          },
        },
      },
    });

    console.log('sales: xD', salesHistory);

    return salesHistory;
  } catch (error) {
    console.error('error: ', error);
  }
}
