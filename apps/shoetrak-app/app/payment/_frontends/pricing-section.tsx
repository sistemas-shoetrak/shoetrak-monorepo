"use client";

import { CompactPricingCard } from "../../../components";
import { usePayment, Plan } from "../../../modules";
import { capitalize, formatPrice } from "@shoetrak/common";
import { cn } from "@ui/lib/utils";

const PLANS: Plan[] = [
  {
    label: "starter",
    price: 100,
    billing: "mês",
  },
  {
    label: "advanced",
    price: 200,
    billing: "mês",
  },
];

/**
 * @description This section is responsible for displaying the pricing options available to
 * the user. It should be enveloped by a `PaymentProvider` to provide the
 * necessary context to the it's functions.
 *
 */
export function PricingSection() {
  const { plan, setPlan } = usePayment();

  const pricing = formatPrice(plan.price, "pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumIntegerDigits: 1,
    minimumFractionDigits: 2,
  });

  return (
    <section className="lg:sticky lg:top-0 flex flex-col justify-between item bg-white lg:bg-[#F4F8FF] lg:max-h-screen py-4 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 lg:px-12 gap-4">
        {PLANS.map((selectPlan) => (
          <CompactPricingCard
            key={selectPlan.label}
            className={cn(
              "cursor-pointer transition-colors duration-200 ease-in-out",
              selectPlan.label === plan.label && "bg-slate-950 text-white",
            )}
            label={selectPlan.label}
            price={selectPlan.price}
            billing={selectPlan.billing}
            onClick={() => setPlan(selectPlan)}
          />
        ))}
      </div>
      <div className="flex flex-col flex-none p-4 lg:px-12 lg:max-w-[634px] xl:max-w-[834px]">
        <h2 className="text-xl font-medium text-slate-500 mb-2">
          Assinar Shoetrak {capitalize(plan.label)} Subscription
        </h2>
        <div className="flex gap-x-1 mb-14">
          <strong className="block text-4xl leading-none">{pricing}</strong>
          <span className="flex flex-col justify-between mb-1">
            <span className="text-base leading-none font-medium text-slate-500">
              por
            </span>
            <span className="text-base leading-none font-medium text-slate-500">
              {plan.billing}
            </span>
          </span>
        </div>
        <div>
          <div>
            <div className="flex justify-between">
              <p className="flex flex-col">
                <span className="text-lg font-medium">
                  Shoetrak {capitalize(plan.label)} Subscription
                </span>
                <span className="text-sm text-slate-500">
                  Cobrado mensalmente
                </span>
              </p>
              <strong className="text-lg font-medium">{pricing}</strong>
            </div>
          </div>
          <hr className="border-none h-px my-4 bg-slate-300" />
          <div>
            <div>
              <div className="flex justify-between">
                <p>
                  <span className="text-lg font-medium">Subtotal</span>
                </p>
                <strong className="text-lg font-medium">{pricing}</strong>
              </div>
              <div className="flex justify-between">
                <p>
                  <span className="text-base font-medium text-slate-500">
                    Imposto
                  </span>
                </p>
                <strong className="text-base font-medium text-slate-500">
                  R$ 0,00
                </strong>
              </div>
            </div>
          </div>
          <hr className="border-none h-px my-4 bg-slate-300" />
          <div className="flex justify-between">
            <p>
              <span className="text-lg font-medium">Total devido hoje</span>
            </p>
            <strong className="text-lg font-medium">{pricing}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
