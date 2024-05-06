import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import { redirect } from "next/navigation";
import ButtonLogin from "./components/button-login";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    const userId = (session?.user as any).id;
    return redirect(`/`);
  }

  if (!session) {
    return (
      <div className="w-full lg:min-h-screen">
        <header className="absolute w-full top-0 flex h-16 items-center gap-4 px-4 md:px-6">
          <nav className="flex w-full justify-center gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 lg:justify-start">
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
              <span className="sr-only">Acme Inc</span>
            </Link>
          </nav>
        </header>
        <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
          <div className="absolute w-full"></div>
          <div className="flex min-h-screen items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Bem-vindo ao Shoetrak!</h1>
                <p className="text-wrap text-muted-foreground">
                  Entre agora e começe a controlar seu estoque de calçados.
                </p>
              </div>
              <div className="grid gap-4">
                <ButtonLogin />
              </div>
            </div>
          </div>
          <div className="hidden bg-[#F4F8FF] lg:block">
            <div className="min-h-screen flex flex-col gap-6 flex-1 justify-end py-12 px-12 lg:max-w-[634px] xl:max-w-[834px]">
              <span className="text-sm font-bold uppercase text-[#017BFF] z-10">
                Venha nos conhecer
              </span>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight z-10 lg:text-5xl">
                Seu estoque de calçados completo e organizado.
              </h1>
              <p className="leading-7 z-10 [&:not(:first-child)]:mt-6">
                O Shoetrak é o estoque de calçados perfeito para você! Com ele,
                você pode gerenciar facilmente seus produtos, vendas e estoque.
                Tenha acesso a tudo isso em um só lugar, de qualquer lugar.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
