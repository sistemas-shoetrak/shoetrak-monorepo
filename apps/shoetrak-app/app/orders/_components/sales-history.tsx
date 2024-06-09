'use client';
import { GetSalesHistory } from '@/app/_actions';
import { OrderDetails, TOrder } from './order-details';
import { OrdersTable } from './orders-table';
import { useState } from 'react';

interface SalesHistoryProps {
  ordersHistory: TOrder[];
}

export function SalesHistory({ ordersHistory }: SalesHistoryProps) {
  const [selectedOrder, setSelectedOrder] = useState<TOrder | null>(null);
  return (
    <div className="flex flex-col md:grid md:grid-cols-[1fr_400px] gap-4">
      <div className="border shadow-sm rounded-lg p-2">
        <OrdersTable
          ordersHistory={ordersHistory}
          onSelect={setSelectedOrder}
        />
      </div>
      {selectedOrder && <OrderDetails order={selectedOrder} />}
    </div>
  );
}
