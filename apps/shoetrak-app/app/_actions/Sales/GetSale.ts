import { db } from '@/app/_lib/prisma';

export async function GetSale({ id }: { id: string }) {
  try {
    const sale = await db.sale.findUnique({
      where: {
        id,
      },
      include: {
        property: {
          include: {
            product: true,
          },
        },
        customer: true,
      },
    });

    return sale;
  } catch (error) {
    console.error('error: xD', error);
  }
}
