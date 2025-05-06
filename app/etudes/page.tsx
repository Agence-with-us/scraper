"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FileUploader from "@/components/FileUploader";

export default function CommandePage() {
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const handleFileUpload = () => {
    if (file) {
      router.push("/etudes/loading");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-14 lg:px-24 py-20">
      <h1 className="text-3xl font-semibold mb-2">Étude de marché</h1>
      <p className="text-muted-foreground mb-6">
        Lancez une analyse de marché avec le scraper
      </p>

      <div className="py-6">
        <div className="w-full">
          <FileUploader onFileChange={setFile} />
        </div>

        {file && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleFileUpload}
              className="px-18 py-4 bg-black text-white rounded hover:opacity-80 transition cursor-pointer"
            >
              Démarrer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
