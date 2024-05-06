"use client";

import { Button } from "@repo/ui/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import Image from "next/image";
import googleIcon from "../../../public/assets/google.png";

const ButtonLogin = () => {
  const { data } = useSession();

  useEffect(() => {}, [data]);

  const handleLoginClick = async () => {
    await signIn();
  };

  return (
    <Button
      variant="outline"
      className="w-full gap-2"
      onClick={handleLoginClick}
    >
      <Image src={googleIcon} alt="google" width={16} height={16} />
      Entrar com Google
    </Button>
  );
};

export default ButtonLogin;
