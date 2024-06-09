import {
  DollarSignIcon,
  UsersIcon,
  CreditCardIcon,
  ActivityIcon,
} from 'lucide-react';

import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from '@repo/ui/components/ui/card';
import { SalesHistorySection } from './_frontends/sales-history-section';
import { Button } from '@ui/components/ui/button';
import CreateSaleModal from './_components/create-sale-modal';
import { GetProducts } from '../_actions/Products/GetProducts';
import CreateSaleForm from './_components/create-sale-form';
import { use } from 'react';
import { GetSearchCustomers } from '../_actions/Customers/GetSearchCustomers';
import { GetRecentCustomers } from '../_actions';
import { GetAllCustomers } from '../_actions/Customers/GetAllCustomers';

export default function Orders() {
  const products = use(
    GetProducts({ storeId: '3cae7585-31f9-4703-9e59-93c266a83e2a' })
  );

  const allCustomers = use(GetAllCustomers()) ?? [];

  async function searchCustomers(customerName: string) {
    'use server';
    const customers = await GetSearchCustomers(customerName);

    return customers;
  }

  // async function allCustomers() {
  //   'use server';
  //   const customers = await GetAllCustomers();

  //   return customers;
  // }

  // const allCustomer = allCustomers();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <CreditCardIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <ActivityIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <div>
        <CreateSaleModal>
          <CreateSaleForm
            productsList={products}
            searchCustomers={searchCustomers}
            allCustomers={allCustomers}
          />
        </CreateSaleModal>
      </div>
      <SalesHistorySection />
    </main>
  );
}
