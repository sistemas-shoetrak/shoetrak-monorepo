import { SummarySection } from './_frontends/summary-section';
import { SalesHistorySection } from './_frontends/sales-history-section';

export default function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <SummarySection />
      <SalesHistorySection />
    </main>
  );
}
