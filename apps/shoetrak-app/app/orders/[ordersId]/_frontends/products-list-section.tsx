import { TrashIcon } from 'lucide-react';

import { Button } from '@repo/ui/components/ui/button';

import DefaultImageProduct from 'public/assets/default-product-image.png';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@repo/ui/components/ui/card';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@repo/ui/components/ui/table';
import { Separator } from '@repo/ui/components/ui/separator';

export type OrderProps = {
  id: string;
  quantity: number;
  subtotal: any;
  discount: any;
  total: any;
  customerId: string;
  propertyId: string;
  property: {
    id: string;
    color: string;
    size: string;
    quantity: number;
    productId: string;
    product: {
      name: string;
    };
  };
  customer: {
    id: string;
    fullName: string;
  };
};

type ProductsListSectionProps = {
  order: OrderProps;
};

export async function ProductsListSection({ order }: ProductsListSectionProps) {
  const orderArr = [order];

  return (
    <>
      <div className="md:col-span-4 lg:col-span-3 xl:col-span-4 flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px] hidden md:table-cell">
                    Image
                  </TableHead>
                  <TableHead className="max-w-[150px]">Nome</TableHead>
                  <TableHead>Quantidade</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderArr.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="hidden md:table-cell">
                      <img
                        src={DefaultImageProduct.src}
                        width="64"
                        height="64"
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {order.property.product.name}
                    </TableCell>
                    <TableCell>{order.property.quantity}</TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Button variant="outline" size="icon">
                        <TrashIcon className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pagamento</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center">
              <div>Subtotal</div>
              <div className="ml-auto">R$ {order.subtotal}</div>
            </div>
            <div className="flex items-center">
              <div>Desconto</div>
              <div className="ml-auto">-R$ {order.subtotal - order.total}</div>
            </div>
            <Separator />
            <div className="flex items-center font-medium">
              <div>Total</div>
              <div className="ml-auto">R$ {order.total}</div>
            </div>
          </CardContent>
          <CardFooter className="flex items-center gap-2">
            <Button size="sm">Atualizar status</Button>
            <Button variant="outline" size="sm">
              Enviar comprovante
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
