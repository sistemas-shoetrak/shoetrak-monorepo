import { Activity, CreditCard, DollarSign, Users } from 'lucide-react';

export const cardSummary = {
  totalSales: {
    key: 'dashboard-01-chunk-0',
    title: 'Total de vendas',
    icon: DollarSign,
  },
  newClients: {
    key: 'dashboard-01-chunk-1',
    title: 'Novos clientes',
    icon: Users,
  },
  salesProducts: {
    key: 'dashboard-01-chunk-2',
    title: 'Produtos vendidos',
    icon: CreditCard,
  },
  productsInInventory: {
    key: 'dashboard-01-chunk-3',
    title: 'Produtos em estoque',
    icon: Activity,
  },
};
