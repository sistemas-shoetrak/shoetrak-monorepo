import { SalesHistory } from '../_components/sales-history';
import { RecentCustomers } from '../_components/recent-customers';

export function SalesHistorySection() {
  return (
    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <SalesHistory />
      <RecentCustomers />
    </div>
  );
}
