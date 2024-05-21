import { Activity, CreditCard, DollarSign, Users } from 'lucide-react';

export const cardSummary = [
  {
    key: 'dashboard-01-chunk-0',
    title: 'Total de vendas',
    value: 'R$ 1.200,00',
    percentage: '+20% desde último mês',
    icon: DollarSign,
  },
  {
    key: 'dashboard-01-chunk-1',
    title: 'Novos clientes',
    value: '3',
    percentage: '+50% desde último mês',
    icon: Users,
  },
  {
    key: 'dashboard-01-chunk-2',
    title: 'Produtos vendidos',
    value: '7',
    percentage: '+19% desde último mês',
    icon: CreditCard,
  },
  {
    key: 'dashboard-01-chunk-3',
    title: 'Produtos em estoque',
    value: '+120',
    percentage: '-2 desde ontem',
    icon: Activity,
  },
];
