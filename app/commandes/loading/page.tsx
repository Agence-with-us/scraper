"use client";

import { useEffect, useState } from "react";
import { FileIcon, ClockIcon } from "lucide-react"; // Ajouter l'icône d'horloge
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function CommandeLoadingPage() {
  const [fileInfo, setFileInfo] = useState<{
    name: string;
    size: number;
  } | null>(null);
  const router = useRouter();
  useEffect(() => {
    const storedFile = localStorage.getItem("uploadedFile");
    if (storedFile) {
      setFileInfo(JSON.parse(storedFile));
    }
    const timeout = setTimeout(() => {
      router.push("/commandes/results");
    }, 8000);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-14 lg:px-24 py-20">
      <h1 className="text-3xl font-semibold mb-2">Prise de commande</h1>
      <p className="text-muted-foreground mb-6">
        Lancez une analyse des références avec le scraper
      </p>

      <div className="flex justify-center items-center">
        <div className="flex flex-col align-center justify-center px-16 py-8 bg-white rounded-lg border-2 text-center my-6 md:my-12">
          <ClockIcon className="text-black w-8 h-8 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 mt-6">Analyse en cours</h2>
          <p className="text-muted-foreground">
            L’opération peut prendre plusieurs heures...
          </p>
        </div>
      </div>

      {fileInfo && (
        <div className="mb-6 p-3 border-2 rounded-md flex items-center gap-4 bg-white">
          <div className="w-14 h-14 flex items-center justify-center bg-[#F9F9FB] rounded-md border-2">
            <FileIcon className="text-black w-6 h-6" />
          </div>

          <div>
            <p className="font-semibold">{fileInfo.name}</p>
            <p className="text-muted-foreground">
              {Math.round(fileInfo.size / 1024)} Ko
            </p>
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-end">
        <Button
          variant="destructive"
          className="w-full md:w-min px-24 py-7 mt-6"
        >
          Annuler
        </Button>
      </div>
    </div>
  );
}
