import { SummarySection } from './_frontends/summary-section';
import { SalesHistorySection } from './_frontends/sales-history-section';
import { CreateManySale } from '../_actions';

export default function Dashboard() {
  const sales = [
    {
      quantity: 1,
      subtotal: 326.0,
      discount: 10.0,
      total: 326.0 * (1 - 0.1),
      customerId: 'db902cac-a1f9-49fe-ae25-ee8d3db50de2',
      propertyId: '1888a2fc-31e5-405b-a87e-94cdd0bd7212',
      storeId: '3cae7585-31f9-4703-9e59-93c266a83e2a',
    },
    {
      quantity: 1,
      subtotal: 233.0,
      discount: 11.0,
      total: 233.0 * (1 - 0.11),
      customerId: 'db902cac-a1f9-49fe-ae25-ee8d3db50de2',
      propertyId: '8edad7f6-efee-48ac-a7bb-3440335ab8bf',
      storeId: '3cae7585-31f9-4703-9e59-93c266a83e2a',
    },
  ];
  // CreateManySale(sales);
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <SummarySection />
      <SalesHistorySection />
    </main>
  );
}
