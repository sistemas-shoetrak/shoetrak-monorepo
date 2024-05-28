'use client';

import { createContext, useContext } from 'react';
import { mockDataDashboard } from './mock';
import { cardSummary } from '@/utils/constants';

export type TCardSummaryData = {
  key: string;
  title: string;
  icon: React.ElementType;
  value: string;
  percentage: string;
};

export type TSalesHistoryData = {
  clientName: string;
  email: string;
  total: string;
};

export interface DashboardContextValue {
  summaryData: TCardSummaryData[];
  salesHistoryData: TSalesHistoryData[];
}

export const DashboardContext = createContext<DashboardContextValue>(
  {} as DashboardContextValue
);

export function useDashboard() {
  return useContext(DashboardContext);
}

export function DashboardProvider({ children }: { children: React.ReactNode }) {
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
    <DashboardContext.Provider value={{ summaryData, salesHistoryData }}>
      {children}
    </DashboardContext.Provider>
  );
}
