import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TrashIcon,
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@repo/ui/components/ui/button';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@repo/ui/components/ui/card';
import { Spinner } from '@repo/ui/components/ui/spinner';
import { Separator } from '@repo/ui/components/ui/separator';
import { redirect, usePathname } from 'next/navigation';
import { GetSale } from '@/app/_actions/Sales/GetSale';
import { Suspense, use } from 'react';
import { HeaderOrder } from './_frontends/header-order';
import { ProductsListSection } from './_frontends/products-list-section';
import { CustomerDetailsSection } from './_frontends/customer-details-section';

interface OrdersParamsProps {
  params: {
    ordersId: string;
  };
}

export default function OrdersId({ params }: OrdersParamsProps) {
  const order = use(GetSale({ id: params.ordersId }));

  if (!order) {
    redirect('/orders');
  }

  const orderToHeader = {
    id: order.id,
    customer: {
      fullName: order.customer.fullName,
    },
    updatedAt: order.updatedAt,
  };

  const customerToSection = {
    id: order.customer.id!,
    fullName: order.customer.fullName!,
    phone: order.customer.phone!,
    email: order.customer.email!,
    city: order.customer.city!,
    state: order.customer.state!,
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <HeaderOrder order={orderToHeader} />
      <div className="grid md:grid-cols-6 gap-6">
        <ProductsListSection order={order} />
        <CustomerDetailsSection customer={customerToSection} />
      </div>
    </main>
  );
}
