'use client';
import { cn } from '@repo/ui/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type TActiveLinkProps = {
  title: React.ReactNode;
  href: string;
};

export function ActiveLink({ title, href }: TActiveLinkProps) {
  const pathname = usePathname();

  const style = pathname === href ? 'text-foreground' : 'text-muted-foreground';
  console.log('pathname: ', pathname);

  return (
    <Link
      href={href}
      className={cn(
        'text-foreground transition-colors hover:text-foreground',
        style
      )}
    >
      {title}
    </Link>
  );
}

export default ActiveLink;
