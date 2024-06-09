import { GetSalesHistory } from '@/app/_actions';
import { SalesHistory } from '../_components/sales-history';

export async function SalesHistorySection() {
  const ordersHistory = await GetSalesHistory();

  return <SalesHistory ordersHistory={ordersHistory!} />;
}
