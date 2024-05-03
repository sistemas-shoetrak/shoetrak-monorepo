"use client";

import {
  Payment as PaymentBrick,
  initMercadoPago,
} from "@mercadopago/sdk-react";

initMercadoPago("TEST-083d5c02-0b83-4b42-87d3-af9376004887", {
  locale: "pt-BR",
});

export function Payment(): JSX.Element {
  return (
    <PaymentBrick
      key="5e8cdd64-4ef1-463f-909e-316a4c2db4fe"
      initialization={{
        amount: 10000,
        preferenceId: "<PREFERENCE_ID>",
        payer: {
          firstName: "",
          lastName: "",
          email: "",
        },
      }}
      customization={{
        paymentMethods: {
          creditCard: "all",
          debitCard: "all",
          ticket: "all",
          bankTransfer: "all",
          atm: "all",
          maxInstallments: 1,
        },
        visual: {
          style: {
            theme: "default",
          },
        },
      }}
      onSubmit={async (param) => {
        console.log(param);
      }}
    />
  );
}
