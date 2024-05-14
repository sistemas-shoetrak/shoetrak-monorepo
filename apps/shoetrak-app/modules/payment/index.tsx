"use client";

// Resolver o problema do eslint, converter para lint de typescript e
// remover esse comentário após isso.
/* eslint  no-unused-vars: 0 */

import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
import { Billing } from "../../components";

export type Plan = {
  label: string;
  price: number;
  billing: Billing;
};

export interface PaymentContextValues {
  plan: Plan;
  isPaymentLoading: boolean;

  setPlan: (plan: Plan) => void;
  setIsPaymentLoading: (isLoading: boolean) => void;
}

export const DEFAULT_PLAN: Plan = {
  label: "starter",
  price: 100,
  billing: "mês",
};

export const PaymentContext = createContext<PaymentContextValues>(
  {} as PaymentContextValues,
);

export function usePayment() {
  return useContext(PaymentContext);
}

export function PaymentProvider({ children }: PropsWithChildren) {
  const [plan, setPlan] = useState<Plan>(DEFAULT_PLAN);
  const [isPaymentLoading, setIsPaymentLoading] = useState<boolean>(true);

  return (
    <PaymentContext.Provider
      value={{ plan, isPaymentLoading, setPlan, setIsPaymentLoading }}
    >
      {children}
    </PaymentContext.Provider>
  );
}
