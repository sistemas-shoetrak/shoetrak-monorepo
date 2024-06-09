import { Spinner } from '@ui/components/ui/spinner';

export default async function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Spinner />
    </div>
  );
}
