'use client';

import { ActivityIcon, ChevronsUpDown, Check } from 'lucide-react';

import { ChangeEvent, use, useEffect, useState } from 'react';

import { Button } from '@repo/ui/components/ui/button';
import { Input } from '@repo/ui/components/ui/input';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@repo/ui/components/ui/card';
import { Label } from '@repo/ui/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@repo/ui/components/ui/select';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTrigger,
} from '@repo/ui/components/ui/dialog';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@repo/ui/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@repo/ui/components/ui/popover';
import { cn } from '@ui/lib/utils';
import { Customer } from '../../../../../packages/data-domain/dist';

export interface Product {
  id: string;
  updatedAt: Date;
  name: string;
  image: Buffer | null;
  description: string | null;
  sellPrice: any;
  properties: {
    color: string;
    size: string;
  }[];
}

interface CustomerList {
  id: string;
  label: string;
  value: string;
}

interface Props {
  productsList: Product[] | undefined;
  searchCustomers: (customerName: string) => Promise<Customer[]>;
  allCustomers: CustomerList[];
}

export default function CreateSaleForm({
  productsList,
  searchCustomers,
  allCustomers,
}: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const [saleChannel, setSaleChannel] = useState([
    {
      id: '1',
      name: 'Loja física',
    },
    {
      id: '2',
      name: 'Loja virtual',
    },
  ]);
  const [saleStatus, setSaleStatus] = useState([
    {
      id: '1',
      name: 'Pagamento Pendente',
    },
    {
      id: '2',
      name: 'Entrega Pendente',
    },
    {
      id: '3',
      name: 'Reservado',
    },
    {
      id: '4',
      name: 'Finalizado',
    },
    {
      id: '5',
      name: 'Cancelado',
    },
  ]);
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Product A',
      price: 200,
      colors: ['black', 'white', 'blue'],
      sizes: ['S', 'M', 'L'],
    },
    {
      id: '2',
      name: 'Product B',
      price: 75,
      colors: ['red', 'green', 'yellow'],
      sizes: ['XS', 'M', 'XL'],
    },
    {
      id: '3',
      name: 'Product C',
      price: 100,
      colors: ['gray', 'navy', 'burgundy'],
      sizes: ['XXS', 'L', 'XXL'],
    },
  ]);
  const [customers, setCustomers] = useState(allCustomers);
  const [newSale, setNewSale] = useState({
    product: null,
    color: null,
    size: null,
    value: 0,
    discount: 0,
    customer: null,
    saleChannel: saleChannel[0]?.name,
    status: 'pending',
    quantity: 1,
  });

  const handleStatusChange = (saleChannel: any) => {
    setNewSale({ ...newSale, saleChannel });
  };
  const handleChannelChange = (saleChannel: any) => {
    setNewSale({ ...newSale, saleChannel });
  };
  const handleProductChange = (product: any) => {
    setNewSale({ ...newSale, product, color: null, size: null });
  };
  const handleColorChange = (color: any) => {
    setNewSale({ ...newSale, color });
  };
  const handleSizeChange = (size: any) => {
    setNewSale({ ...newSale, size });
  };
  const handleValueChange = (value: any) => {
    setNewSale({ ...newSale, value });
  };
  const handleDiscountChange = (discount: any) => {
    setNewSale({ ...newSale, discount });
  };
  const handleCustomerChange = (customer: any) => {
    setNewSale({ ...newSale, customer });
  };

  const handleSubmit = () => {
    setNewSale({
      product: null,
      color: null,
      size: null,
      value: 0,
      discount: 0,
      customer: null,
      saleChannel: saleChannel[0]?.name,
      status: 'pending',
      quantity: 1,
    });
  };

  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-4">
        <div className="grid gap-4 ">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Nova venda</CardTitle>
              <ActivityIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="product" className="text-base">
                    Produto
                  </Label>
                  <Select onValueChange={handleProductChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um produto" />
                    </SelectTrigger>
                    <SelectContent>
                      {products.map((product) => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {newSale.product && (
                  <>
                    <div className="grid grid-cols-2 gap-2 w-full justify-between">
                      <div>
                        <Label htmlFor="color" className="text-base">
                          Cor
                        </Label>
                        <Select
                          defaultValue=""
                          onValueChange={handleColorChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione uma cor" />
                          </SelectTrigger>
                          <SelectContent>
                            {products &&
                              products
                                .find((p) => p.id === newSale.product)!
                                .colors.map((color) => (
                                  <SelectItem key={color} value={color}>
                                    {color}
                                  </SelectItem>
                                ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="size" className="text-base">
                          Tamanho
                        </Label>
                        <Select
                          defaultValue=""
                          onValueChange={handleSizeChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um tamanho" />
                          </SelectTrigger>
                          <SelectContent>
                            {products &&
                              products
                                .find((p) => p.id === newSale.product)!
                                .sizes.map((size) => (
                                  <SelectItem key={size} value={size}>
                                    {size}
                                  </SelectItem>
                                ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 w-full justify-between">
                      {/* valor do produto input disabled */}
                      <div>
                        <Label htmlFor="subtotal" className="text-base">
                          Subtotal
                        </Label>
                        <Input
                          id="subtotal"
                          type="number"
                          value={
                            products.find((p) => p.id === newSale.product)!
                              .price * newSale.quantity
                          }
                          disabled
                        />
                      </div>

                      {/* valor cobrado input disabled */}
                      <div>
                        <Label htmlFor="total" className="text-base">
                          Total
                        </Label>
                        <Input
                          id="total"
                          type="number"
                          value={
                            (products.find((p) => p.id === newSale.product)!
                              .price -
                              (products.find((p) => p.id === newSale.product)!
                                .price *
                                newSale.discount) /
                                100) *
                            newSale.quantity
                          }
                          disabled
                        />
                      </div>

                      {/* desconto input */}
                      <div>
                        <Label htmlFor="discount" className="text-base">
                          Desconto em %
                        </Label>
                        <Input
                          id="discount"
                          type="number"
                          value={newSale.discount}
                          onChange={(e) => handleDiscountChange(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 w-full justify-between">
                      {/* valor do produto input disabled */}
                      <div>
                        <Label htmlFor="discount" className="text-base">
                          Quantidade
                        </Label>
                        <Input
                          id="quantity"
                          type="number"
                          value={newSale.quantity}
                          onChange={(e) => {
                            setNewSale({
                              ...newSale,
                              quantity: Number(e.target.value),
                            });
                          }}
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* channel */}
                <div className="grid gap-2">
                  <Label htmlFor="product" className="text-base">
                    Canal de venda
                  </Label>
                  <Select onValueChange={handleChannelChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um canal" />
                    </SelectTrigger>
                    <SelectContent>
                      {saleChannel.map((channel) => (
                        <SelectItem key={channel.id} value={channel.id}>
                          {channel.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* status */}
                <div className="grid gap-2">
                  <Label htmlFor="product" className="text-base">
                    Status
                  </Label>
                  <Select onValueChange={handleStatusChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um canal" />
                    </SelectTrigger>
                    <SelectContent>
                      {saleStatus.map((status) => (
                        <SelectItem key={status.id} value={status.id}>
                          {status.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* cliente select */}
                <div className="grid gap-2">
                  <Label htmlFor="customer" className="text-base">
                    Cliente
                  </Label>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between"
                      >
                        {value
                          ? customers.find((cstmr) => cstmr.value === value)
                              ?.label
                          : 'Selecione um cliente...'}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0 popover-content-width-full">
                      <Command>
                        <CommandInput
                          placeholder="Bucar cliente..."
                          onChangeCapture={async (
                            event: ChangeEvent<HTMLInputElement>
                          ) => {
                            if (!event.target.value)
                              return setCustomers(allCustomers);
                            const getSearchCustomer = await searchCustomers(
                              event.target.value
                            );

                            const normalizedCustomers = getSearchCustomer.map(
                              (cstmr) => {
                                return {
                                  id: cstmr.id,
                                  label: cstmr.fullName,
                                  value: cstmr.fullName,
                                };
                              }
                            );

                            return setCustomers(normalizedCustomers);
                          }}
                        />
                        <CommandList>
                          <CommandEmpty>Cliente não encontrado</CommandEmpty>
                          <CommandGroup>
                            {customers.map((cstmr) => (
                              <CommandItem
                                key={cstmr.id}
                                value={cstmr.value}
                                onSelect={(currentValue) => {
                                  setValue(
                                    currentValue === value ? '' : currentValue
                                  );
                                  setOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    'mr-2 h-4 w-4',
                                    value === cstmr.value
                                      ? 'opacity-100'
                                      : 'opacity-0'
                                  )}
                                />
                                {cstmr.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>

                <Button type="submit" className="w-full" onClick={handleSubmit}>
                  Save Sale
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
