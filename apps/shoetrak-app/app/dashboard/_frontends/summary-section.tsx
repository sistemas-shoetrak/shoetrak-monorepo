import { CardSummary } from '@/components';
import { cardSummary } from '@/utils/constants';

export function SummarySection() {
  return (
    <section className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {cardSummary.map((data) => (
        <CardSummary {...data} key={data.key} />
      ))}
    </section>
  );
}
