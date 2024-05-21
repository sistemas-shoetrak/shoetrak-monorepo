import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';

interface IDataProps {
  key: string;
  title: string;
  value: string;
  percentage: string;
  icon: React.ElementType;
}

export function CardSummary(data: IDataProps) {
  const Icon = data.icon;
  return (
    <Card x-chunk={data.key}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{data.title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{data.value}</div>
        <p className="text-xs text-muted-foreground">{data.percentage}</p>
      </CardContent>
    </Card>
  );
}
