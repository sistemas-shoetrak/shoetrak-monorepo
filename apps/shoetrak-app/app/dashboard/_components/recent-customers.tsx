import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/ui/components/ui/avatar';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';
import { GetRecentCustomers } from '@/app/_actions';
import { dateToString } from '@/utils/functions/dateToString';

export async function RecentCustomers() {
  const recentCustomers = await GetRecentCustomers();

  return (
    <Card x-chunk="dashboard-01-chunk-5">
      <CardHeader>
        <CardTitle>Novos Clientes</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {recentCustomers?.map((customer) => {
          const fullNameSplited = customer.fullName.split(' ');

          const initials =
            fullNameSplited.length === 1
              ? `${fullNameSplited[0]?.charAt(0)}`
              : fullNameSplited.length > 1
                ? `${fullNameSplited[0]?.charAt(0)}${fullNameSplited[fullNameSplited.length - 1]?.charAt(0)}`
                : 'U';

          return (
            <div className="flex items-center gap-4" key={customer.id}>
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  {customer.fullName}
                </p>
                <p className="text-sm text-muted-foreground">
                  {customer.email}
                </p>
              </div>
              <div className="ml-auto font-medium">
                <p className="text-sm text-muted-foreground">
                  {dateToString(customer.created_at!)}
                </p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
