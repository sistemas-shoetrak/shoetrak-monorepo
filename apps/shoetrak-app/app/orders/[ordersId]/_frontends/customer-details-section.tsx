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
import Link from 'next/link';

export type OrderProps = {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  state: string;
};

type CustomerDetailsSectionProps = {
  customer: OrderProps;
};

export async function CustomerDetailsSection({
  customer,
}: CustomerDetailsSectionProps) {
  return (
    <>
      <div className="md:col-span-2 lg:col-span-3 xl:col-span-2 flex flex-col gap-6">
        <Card>
          <div>
            <CardHeader className="flex flex-row items-center space-y-0">
              <CardTitle>Cliente</CardTitle>
              <Button variant="secondary" className="ml-auto">
                Edit
              </Button>
            </CardHeader>
            <CardContent className="text-sm">
              <div className="grid gap-1">
                <Link
                  href="#"
                  className="text-blue-600 underline"
                  prefetch={false}
                >
                  {customer.fullName}
                </Link>
                <div>23 total orders</div>
              </div>
            </CardContent>
          </div>
          <Separator />
          <div>
            <CardHeader>
              <CardTitle>Informações de contato</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <div className="grid gap-1">
                <Link
                  href={`mailto:${customer.email}`}
                  className="text-blue-600"
                  prefetch={false}
                  target="_blank"
                >
                  {customer.email}
                </Link>
                <div className="text-muted-foreground">{customer.phone}</div>
              </div>
            </CardContent>
          </div>
          <Separator />
          <div>
            <CardHeader>
              <CardTitle>Endereço</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <div>
                {customer.city}
                <br />
                {customer.state}
              </div>
            </CardContent>
          </div>
          <Separator />
          <div>
            <CardHeader>
              <CardTitle>Tipo de pagamento</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">Cartão 3x</CardContent>
          </div>
        </Card>
      </div>
    </>
  );
}
