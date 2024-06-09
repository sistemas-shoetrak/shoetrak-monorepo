import { db } from '@/app/_lib/prisma';
import { Sale } from '../../../../../packages/data-domain/dist';

export async function CreateCustomer() {
  const customer = await db.customer.create({
    data: {
      fullName: 'Liam Johnson',
      phone: '1111111111',
      email: 'liam@example.com',
      state: 'Ceará',
      city: 'São Benedito',
      updated_at: new Date(),
    },
  });

  await db.customer.create({
    data: {
      fullName: 'Olivia Smith',
      phone: '1111111112',
      email: 'olivia@example.com',
      state: 'Ceará',
      city: 'São Benedito',
      updated_at: new Date(),
    },
  });

  await db.customer.create({
    data: {
      fullName: 'Noah Williams',
      phone: '1111111113',
      email: 'noah@example.com',
      state: 'Ceará',
      city: 'São Benedito',
      updated_at: new Date(),
    },
  });

  await db.customer.create({
    data: {
      fullName: 'Emma Brown',
      phone: '1111111114',
      email: 'emma@example.com',
      state: 'Ceará',
      city: 'São Benedito',
      updated_at: new Date(),
    },
  });

  return customer;
}

export async function CreateBrand() {
  const brand = await db.brand.create({
    data: {
      name: 'Nike',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  return brand;
}

export async function CreateStore() {
  const store = await db.store.create({
    data: {
      cnpj: '34797025000180',
      companyName: 'Fon',
      userId: 'clwh2uq9x0002u7lwgw3oum04',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
}

export async function CreateProduct() {
  const product = await db.product.create({
    data: {
      name: 'Tênis Nike Air Max',
      sellPrice: 250.0,
      buyPrice: 89.99,
      brandId: '1fa8a3a0-bb1c-458f-98db-fa4eaff42704',
      createdAt: new Date(),
      updatedAt: new Date(),
      storeId: '3cae7585-31f9-4703-9e59-93c266a83e2a',
      properties: {
        createMany: {
          data: [
            {
              color: 'Branco',
              size: '38',
              quantity: 3,
            },
            {
              color: 'Preto',
              size: '35',
              quantity: 3,
            },
          ],
        },
      },
    },
  });
  return product;
}

export async function CreateSale() {
  //   try {
  //     const sale = await db.sale.create({
  //       data: {
  //         quantity: 1,
  //         subtotal: 250.0,
  //         discount: 5.0,
  //         total: 250.0 * (1 - 0.05),
  //         customerId: '65539d26-26f2-441e-9191-2fe1cbc0ee35',
  //         propertyId: '8edad7f6-efee-48ac-a7bb-3440335ab8bf',
  //         storeId: '3cae7585-31f9-4703-9e59-93c266a83e2a',
  //       },
  //     });

  //     const propertyUpdated = await db.property.update({
  //       where: {
  //         id: '8edad7f6-efee-48ac-a7bb-3440335ab8bf',
  //       },
  //       data: {
  //         quantity: {
  //           decrement: 1,
  //         },
  //       },
  //     });

  //     console.log('Sale created', sale);
  //     console.log('propertyUpdated: ', propertyUpdated);
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   try {
  //     const sale = await db.sale.create({
  //       data: {
  //         quantity: 1,
  //         subtotal: 250.0,
  //         discount: 0.0,
  //         total: 250.0 * (1 - 0.0),
  //         customerId: '68ff3697-cf4c-4c9a-b7ed-b4320cbfad02',
  //         propertyId: '8edad7f6-efee-48ac-a7bb-3440335ab8bf',
  //         storeId: '3cae7585-31f9-4703-9e59-93c266a83e2a',
  //       },
  //     });

  //     const propertyUpdated = await db.property.update({
  //       where: {
  //         id: '8edad7f6-efee-48ac-a7bb-3440335ab8bf',
  //       },
  //       data: {
  //         quantity: {
  //           decrement: 1,
  //         },
  //       },
  //     });

  //     console.log('Sale created', sale);
  //     console.log('propertyUpdated: ', propertyUpdated);
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   try {
  //     const sale = await db.sale.create({
  //       data: {
  //         quantity: 1,
  //         subtotal: 250.0,
  //         discount: 10.0,
  //         total: 250.0 * (1 - 0.1),
  //         customerId: '27ca45a8-7d23-4822-9ad4-549a6ab06891',
  //         propertyId: '8edad7f6-efee-48ac-a7bb-3440335ab8bf',
  //         storeId: '3cae7585-31f9-4703-9e59-93c266a83e2a',
  //       },
  //     });

  //     const propertyUpdated = await db.property.update({
  //       where: {
  //         id: '8edad7f6-efee-48ac-a7bb-3440335ab8bf',
  //       },
  //       data: {
  //         quantity: {
  //           decrement: 1,
  //         },
  //       },
  //     });

  //     console.log('Sale created', sale);
  //     console.log('propertyUpdated: ', propertyUpdated);
  //   } catch (error) {
  //     console.log(error);
  //   }

  try {
    const sale = await db.sale.create({
      data: {
        quantity: 1,
        subtotal: 250.0,
        discount: 10.0,
        total: 250.0 * (1 - 0.1),
        customerId: 'db902cac-a1f9-49fe-ae25-ee8d3db50de2',
        propertyId: '1888a2fc-31e5-405b-a87e-94cdd0bd7212',
        storeId: '3cae7585-31f9-4703-9e59-93c266a83e2a',
      },
    });

    const propertyUpdated = await db.property.update({
      where: {
        id: '1888a2fc-31e5-405b-a87e-94cdd0bd7212',
      },
      data: {
        quantity: {
          decrement: 1,
        },
      },
    });

    console.log('Sale created', sale);
    console.log('propertyUpdated: ', propertyUpdated);
  } catch (error) {
    console.log(error);
  }
}

export async function CreateManySale(data: any[]) {
  console.log('data many sale', data);
  try {
    const sale = await db.sale.createMany({
      data: data,
    });
    const propertyUpdated = await db.property.update({
      where: {
        id: '1888a2fc-31e5-405b-a87e-94cdd0bd7212',
      },
      data: {
        quantity: {
          decrement: 1,
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
}
