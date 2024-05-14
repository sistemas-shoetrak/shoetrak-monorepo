"use client";

import Link from "next/link";
import { usePayment } from "@/modules";
import { Payment } from "@/components";

/**
 * @description This section is responsible for displaying the payment operator
 * to the user. It should be enveloped by a `PaymentProvider` to provide the
 * necessary context to the it's functions.
 *
 */
export function PaymentSection() {
  const { plan, setIsPaymentLoading } = usePayment();

  return (
    <section className="flex flex-col min-h-screen items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Estamos quase lá!</h1>
          <p className="text-wrap text-muted-foreground">
            Finalize seu pagamento para começar a organizar seu estoque de
            calçados.
          </p>
        </div>
      </div>
      <Payment
        amount={plan.price}
        className="max-w-[30rem] w-full"
        onSubmit={async (data) => console.log(data)}
        onReady={() => setIsPaymentLoading(false)}
      />
      <p className="flex justify-around items-center text-sm text-slate-500 w-full lg:gap-x-4 px-4">
        <span>
          Powered by{" "}
          <Link
            target="_blank"
            href="https://www.mercadopago.com.br/"
            title="Ir para mercadopago"
            rel="noopener noreferrer"
            className="font-semibold hover:text-slate-400 transition-colors"
          >
            mercadopago
          </Link>
        </span>
        <span className="block h-4 bg-slate-300 w-[1px]" />
        <Link
          target="_blank"
          href="https://www.mercadopago.com.br/ajuda/termos-e-condicoes_299"
          title="Ir para termos e condições do mercadopago"
          rel="noopener noreferrer"
          className="hover:text-slate-600 transition-colors"
        >
          Termos
        </Link>
        <Link
          target="_blank"
          href="https://www.mercadopago.com.br/privacidade/v2/declaracao-privacidade"
          title="Ir para a política de privacidade do mercadopago"
          rel="noopener noreferrer"
          className="hover:text-slate-600 transition-colors"
        >
          Privacidade
        </Link>
      </p>
    </section>
  );
}
