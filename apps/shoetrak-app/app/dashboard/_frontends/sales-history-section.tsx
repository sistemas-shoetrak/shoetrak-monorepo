import { SalesHistory } from '../_components/sales-history';
import { RecentSales } from '../_components/recent-sales';

export function SalesHistorySection() {
  return (
    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <SalesHistory />
      <RecentSales />
    </div>
  );
}
