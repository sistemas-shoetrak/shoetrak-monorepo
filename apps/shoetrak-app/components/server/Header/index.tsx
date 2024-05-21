// libraries
import Link from 'next/link';
import Image from 'next/image';
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from 'lucide-react';

// packages ui
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/ui/components/ui/avatar';
import { Button } from '@repo/ui/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@repo/ui/components/ui/dropdown-menu';

import { Input } from '@repo/ui/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@repo/ui/components/ui/sheet';

// components client
import { ActiveLink } from '@/components';

// utils
import { navbarOptions } from '@/utils/constants';
import React from 'react';

type THeaderLayout = {
  children: React.ReactNode;
};

export async function HeaderLayout({ children }: THeaderLayout) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base w-7 h-7"
          >
            <Image
              src="https://raw.githubusercontent.com/sistemas-shoetrak/shoetrak-assets/94a67f6535061a2417a59bfea87e905571c55d2f/images/logo-primary-reduce.svg"
              alt="shoetrak"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="sr-only">Shoetrak</span>
          </Link>
          {navbarOptions.map((option, index) => (
            <ActiveLink
              key={`${option.title}${option.href}`}
              href={option.href}
              title={option.title}
            />
          ))}
          {/* <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Analytics
          </Link> */}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
              >
                <Image
                  src="https://raw.githubusercontent.com/sistemas-shoetrak/shoetrak-assets/94a67f6535061a2417a59bfea87e905571c55d2f/images/logo-primary-reduce.svg"
                  alt="shoetrak"
                  width={28}
                  height={28}
                />
                <span className="sr-only">Shoetrak</span>
              </Link>
              {navbarOptions.map((option, index) => (
                <ActiveLink
                  key={`${option.title}${option.href}`}
                  href={option.href}
                  title={option.title}
                />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar produtos..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuItem>Suporte</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <>{children}</>
    </div>
  );
}
