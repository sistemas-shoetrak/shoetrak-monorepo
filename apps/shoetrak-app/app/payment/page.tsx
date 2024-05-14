import Image from "next/image";
import Link from "next/link";
import { PaymentProvider } from "@/modules";
import { PricingSection } from "./_frontends/pricing-section";
import { PaymentSection } from "./_frontends/payment-section";

export default function PaymentPage() {
  return (
    <PaymentProvider>
      <header className="lg:absolute lg:top-0 flex w-full h-16 items-center gap-4 px-4 md:px-6 z-10">
        <nav className="flex w-full justify-center gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 lg:justify-start">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base mx-auto lg:ml-auto"
          >
            <Image
              src="https://raw.githubusercontent.com/sistemas-shoetrak/shoetrak-assets/94a67f6535061a2417a59bfea87e905571c55d2f/images/logo-primary-reduce.svg"
              alt="shoetrak"
              width={28}
              height={28}
            />
            <span className="sr-only">Shoetrak</span>
          </Link>
        </nav>
      </header>
      <main className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
        <PricingSection />
        <PaymentSection />
      </main>
    </PaymentProvider>
  );
}
