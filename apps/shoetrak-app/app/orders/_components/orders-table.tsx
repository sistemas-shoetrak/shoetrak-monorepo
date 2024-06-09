import { EllipsisIcon } from 'lucide-react';

import { Button } from '@repo/ui/components/ui/button';
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from '@repo/ui/components/ui/dropdown-menu';
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@repo/ui/components/ui/table';

import { Dispatch, SetStateAction } from 'react';
import { TOrder } from './order-details';
import { dateToString } from '@/utils/functions/dateToString';
import { sliceId } from '@/utils/functions/sliceId';
import { redirect, useRouter } from 'next/navigation';

interface OrdersTableProps {
  onSelect: Dispatch<SetStateAction<TOrder | null>>;
  ordersHistory: TOrder[];
}

export function OrdersTable({ onSelect, ordersHistory }: OrdersTableProps) {
  const router = useRouter();
  const handleRedirect = (id: string, type: 'order' | 'customer') => {
    if (type === 'order') router.push(`/orders/${id}`);
    return redirect(`/customers/${id}`);
  };
  return (
    <>
      {ordersHistory && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Order</TableHead>
              <TableHead className="min-w-[150px]">Customer</TableHead>
              <TableHead className="hidden md:table-cell">Channel</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ordersHistory?.map((order) => (
              <TableRow key={order.id} onClick={() => onSelect(order)}>
                <TableCell className="font-medium">
                  #{order.id && sliceId(order.id)}
                </TableCell>
                <TableCell>{order.customer.fullName}</TableCell>
                <TableCell className="hidden md:table-cell">
                  Online Store
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {order.updatedAt && dateToString(order.updatedAt)}
                </TableCell>
                <TableCell className="text-right">R$ {order.total}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  Finalizado
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <EllipsisIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => handleRedirect(order.id!, 'order')}
                      >
                        Detalhes da venda
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        Detalhes do cliente
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
