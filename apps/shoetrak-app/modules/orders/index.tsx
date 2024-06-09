'use client';

import { createContext, useContext } from 'react';
import { mockDataDashboard } from './mock';
import { cardSummary } from '@/utils/constants';

type TCardSummaryData = {
  key: string;
  title: string;
  icon: React.ElementType;
  value: string;
  percentage: string;
};

type TSalesHistoryData = {
  clientName: string;
  email: string;
  total: string;
};

interface OrdersContextValue {
  summaryData: TCardSummaryData[];
  salesHistoryData: TSalesHistoryData[];
}

export const OrdersContext = createContext<OrdersContextValue>(
  {} as OrdersContextValue
);

export function useOrders() {
  return useContext(OrdersContext);
}

export function OrdersProvider({ children }: { children: React.ReactNode }) {
  const summaryData: TCardSummaryData[] = [
    {
      ...mockDataDashboard.summaryData.totalSales,
      ...cardSummary.totalSales,
    },
    {
      ...mockDataDashboard.summaryData.newClients,
      ...cardSummary.newClients,
    },
    {
      ...mockDataDashboard.summaryData.salesProducts,
      ...cardSummary.salesProducts,
    },
    {
      ...mockDataDashboard.summaryData.productsInInventory,
      ...cardSummary.productsInInventory,
    },
  ];
  const salesHistoryData = mockDataDashboard.salesHistoryData;

  return (
    <OrdersContext.Provider value={{ summaryData, salesHistoryData }}>
      {children}
    </OrdersContext.Provider>
  );
}
