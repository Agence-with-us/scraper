"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen min-h-[600px] w-full items-center justify-center">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-16 md:px-24 py-8 pt-2">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={68}
          height={32}
          priority
          className="pb-8"
        />
        <h1 className="text-3xl font-bold mb-4">Connexion</h1>
        <p className="text-muted-foreground mb-8">
          Connectez-vous à votre espace personnel
        </p>

        <form className="space-y-8 w-full max-w-md">
          <div className="gap-2 flex flex-col">
            <label htmlFor="email">Adresse email</label>
            <Input
              id="email"
              type="email"
              placeholder="Entrez votre adresse email"
              className="py-6"
            />
          </div>

          <div className="gap-2 flex flex-col">
            <label htmlFor="password">Mot de passe</label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Entrez votre mot de passe"
                className="py-6"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full py-7 cursor-pointer">
            Se connecter
          </Button>
          <a
            href="/forgot-password"
            className="underline text-sm text-dark hover:opacity-60"
          >
            Mot de passe oublié ?
          </a>
        </form>
      </div>

      <div className="hidden md:block w-full md:w-1/2 h-[95vh] rounded-none md:rounded-l-3xl">
        <img
          src="/images/login.png"
          alt="Connexion visuelle"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default LoginPage;
