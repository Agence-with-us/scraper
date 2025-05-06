"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

const ProfilPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-14 lg:px-24 py-20">
      <h1 className="text-3xl font-semibold mb-2">Mon Profil</h1>
      <p className="text-muted-foreground mb-6">
        Modifiez les paramètres de votre profil
      </p>
      <div className="full-w md:w-[35vw]">
        <form className="space-y-6 py-6 ">
          <div className="gap-2 flex flex-col">
            <label htmlFor="email">Adresse mail</label>
            <Input
              id="email"
              type="email"
              value="jordan.gilles@sdm.fr"
              readOnly
              className="py-6"
            />
          </div>

          <div className="gap-2 flex flex-col">
            <label htmlFor="password">Mot de passe</label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Entrez un nouveau mot de passe"
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

          <div className="gap-2 flex flex-col">
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirmez votre mot de passe"
                className="py-6"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
        </form>
        <Button variant="destructive" className="px-16 py-7 mt-1">
          Se déconnecter
        </Button>
      </div>
    </div>
  );
};

export default ProfilPage;
