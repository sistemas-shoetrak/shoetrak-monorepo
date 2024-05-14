"use client";

// Resolver o problema do eslint, converter para lint de typescript e
// remover esse comentário após isso.
/* eslint  no-unused-vars: 0 */

import { Payment as P, initMercadoPago } from "@mercadopago/sdk-react";
import { HTMLAttributes } from "react";

initMercadoPago("TEST-083d5c02-0b83-4b42-87d3-af9376004887", {
  locale: "pt-BR",
});

export interface PaymentProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onSubmit"> {
  amount: number;
  onSubmit: (param1: unknown, param2: unknown) => Promise<unknown>;
  onReady?: () => void;
}

export function Payment({
  amount,
  onSubmit,
  onReady,
  ...rest
}: PaymentProps): JSX.Element {
  return (
    <div key="payment-brick" {...rest}>
      <P
        initialization={{
          amount,
          preferenceId: "<PREFERENCE_ID>",
        }}
        customization={{
          paymentMethods: {
            mercadoPago: "all",
            creditCard: "all",
            debitCard: "all",
            ticket: "all",
            bankTransfer: "all",
            maxInstallments: 12,
          },
          enableReviewStep: true,
          visual: {
            hideFormTitle: true,
            defaultPaymentOption: {
              creditCardForm: true,
            },
          },
        }}
        onSubmit={onSubmit}
        onReady={onReady}
      />
    </div>
  );
}
