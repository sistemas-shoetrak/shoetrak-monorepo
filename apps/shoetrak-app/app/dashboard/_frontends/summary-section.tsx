'use client';
import { cardSummary } from '@/utils/constants';
import { CardSummary } from '../_components/card-summary';
import { useDashboard } from '@/modules';

export function SummarySection() {
  const { summaryData } = useDashboard();
  console.log('summaryData: ', summaryData);
  return (
    <section className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {summaryData.map((data) => (
        <CardSummary {...data} key={data.key} />
      ))}
    </section>
  );
}
