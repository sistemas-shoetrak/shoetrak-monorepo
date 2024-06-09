import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardDescription,
} from '@repo/ui/components/ui/card';
import { GetSalesHistory } from '@/app/_actions';
import { dateToString } from '@/utils/functions/dateToString';

export type TOrder = {
  id: string | null;
  total: number | any | null;
  updatedAt: Date | null;
  customer: {
    fullName: string | null;
    email: string | null;
    phone: string | number | null;
  };
};

interface OrderDetailsProps {
  order: TOrder;
}

export function OrderDetails({ order }: OrderDetailsProps) {
  return (
    <Card className="max-w-3xl">
      <CardHeader>
        <CardTitle>Detalhe da venda</CardTitle>
        <CardDescription>Informações sobre a venda selecionada</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div>
            <h3 className="text-lg font-medium">
              Venda #{order.id?.slice(0, 5)}
            </h3>
            <p className="text-muted-foreground">
              Registrada em {dateToString(order.updatedAt!)}
            </p>
          </div>
          <div>
            <h4 className="text-base font-medium">Cliente</h4>
            <div className="grid gap-1">
              <p>{order.customer.fullName}</p>
              <p className="text-muted-foreground">{order.customer.email}</p>
              <p className="text-muted-foreground">{order.customer.phone}</p>
            </div>
          </div>
          <div>
            <h4 className="text-base font-medium">Canal de venda</h4>
            <p>Online Store</p>
          </div>
          <div>
            <h4 className="text-base font-medium">Total</h4>
            <p className="text-2xl font-bold">R$ {order.total}</p>
          </div>
          <div>
            <h4 className="text-base font-medium">Status</h4>
            <p className="text-green-500">Finalizado</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
