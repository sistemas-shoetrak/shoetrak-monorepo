'use client';

import { ActivityIcon } from 'lucide-react';

import { useState } from 'react';

import { Button } from '@repo/ui/components/ui/button';
import { Input } from '@repo/ui/components/ui/input';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
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
import CreateSaleForm from './create-sale-form';

interface Product {
  id: string;
  name: string;
  price: number;
  colors: string[];
  sizes: string[];
}

interface Props {
  children: React.ReactNode;
}

export default function CreateSaleModal({ children }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <Button variant="default">Nova venda</Button>
        </DialogTrigger>
        <DialogContent className="w-full flex flex-col items-center p-4">
          <DialogHeader className="py-4">
            <CardTitle className="text-center">Cadastrar uma venda</CardTitle>
            <DialogDescription className="text-md text-center">
              Preencha os campos abaixo para adicionar uma nova venda
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col w-full">{children}</div>
        </DialogContent>
      </Dialog>
    </>
  );
}
