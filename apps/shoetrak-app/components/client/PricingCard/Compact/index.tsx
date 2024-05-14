"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "@ui/lib/utils";
import { formatPrice, capitalize } from "@shoetrak/common";

export type Billing = "mês" | "ano";

export interface CompactPricingCardProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  price: number;
  billing: Billing;
}

export function CompactPricingCard({
  label,
  price,
  billing,
  className,
  ...rest
}: CompactPricingCardProps): JSX.Element {
  return (
    <button
      {...rest}
      className={cn(
        "bg-white shadow-lg lg:hover:shadow-xl transition-shadow rounded-xl overflow-hidden p-3",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">{capitalize(label)}</h3>
        <p className="flex items-baseline gap-x-1">
          <span className="text-2xl font-bold">
            {formatPrice(price, "pt-BR", {
              style: "currency",
              currency: "BRL",
              currencyDisplay: "symbol",
              minimumIntegerDigits: 1,
              minimumFractionDigits: 2,
            })}
          </span>
          <span className="text-gray-400">/{billing}</span>
        </p>
      </div>
    </button>
  );
}
