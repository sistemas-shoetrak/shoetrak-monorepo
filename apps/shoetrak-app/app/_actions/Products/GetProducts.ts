import { db } from '@/app/_lib/prisma';

export async function GetProducts({ storeId }: { storeId: string }) {
  try {
    const products = await db.product.findMany({
      where: {
        storeId,
      },
      select: {
        id: true,
        name: true,
        sellPrice: true,
        properties: {
          select: {
            id: true,
            color: true,
            size: true,
            quantity: true,
          },
        },
        image: true,
        updatedAt: true,
        description: true,
      },
    });

    return products;
  } catch (error) {
    console.error('error: xD', error);
  }
}
