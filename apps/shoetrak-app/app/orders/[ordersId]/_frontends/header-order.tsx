'use client';
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import { Button } from '@repo/ui/components/ui/button';

import { sliceId } from '@/utils/functions/sliceId';
import { useRouter } from 'next/navigation';
import { dateToString } from '@/utils/functions/dateToString';

interface HeaderOrderProps {
  order: {
    id: string;
    customer: {
      fullName: string;
    };
    updatedAt: Date;
  };
}

export async function HeaderOrder({ order }: HeaderOrderProps) {
  const router = useRouter();

  const handleBack = () => {
    router.push('/orders');
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => handleBack()}>
          <ArrowLeftIcon className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="font-semibold text-lg md:text-xl">
          {'#'}
          {sliceId(order!.id)} -{' '}
          <span className="font-normal text-muted-foreground">
            {order!.customer.fullName}
          </span>
          <span className="font-normal text-muted-foreground">
            {', '}
            {dateToString(order!.updatedAt)}
          </span>
        </h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRightIcon className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
    </>
  );
}
