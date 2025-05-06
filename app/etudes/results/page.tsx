"use client";

import { useEffect, useState } from "react";
import { columns } from "@/components/etudes/columns";
import { DataTable } from "@/components/etudes/DataTable";
import { FileIcon, DownloadIcon } from "lucide-react";
import { saveAs } from "file-saver";

const data = [
  {
    ref: "A04161",
    libelleArt: "Produit A",
    fabricant: "MEDISTOCK",
    libelleSite: "Exemple",
    refSite: "EX123",
    prixTTC: 59.99,
    refArt: "XXXXXX",
  },
  {
    ref: "67890",
    libelleArt: "Produit B",
    fabricant: "MarqueY",
    libelleSite: "Exemple",
    refSite: "EX456",
    prixTTC: 29.99,
    refArt: "XXXXXX",
  },
  {
    ref: "54321",
    libelleArt: "Produit C",
    fabricant: "MarqueZ",
    libelleSite: "Exemple",
    refSite: "EX789",
    prixTTC: 89.99,
    refArt: "XXXXXX",
  },
  {
    ref: "54321",
    libelleArt: "Produit C",
    fabricant: "MarqueZ",
    libelleSite: "Exemple",
    refSite: "EX789",
    prixTTC: 89.99,
    refArt: "XXXXXX",
  },
  {
    ref: "54321",
    libelleArt: "Produit C",
    fabricant: "MarqueZ",
    libelleSite: "Exemple",
    refSite: "EX789",
    prixTTC: 89.99,
    refArt: "XXXXXX",
  },
  {
    ref: "54321",
    libelleArt: "Produit C",
    fabricant: "MarqueZ",
    libelleSite: "Exemple",
    refSite: "EX789",
    prixTTC: 89.99,
    refArt: "XXXXXX",
  },
  {
    ref: "54321",
    libelleArt: "Produit C",
    fabricant: "MarqueZ",
    libelleSite: "Exemple",
    refSite: "EX789",
    prixTTC: 89.99,
    refArt: "XXXXXX",
  },
];

const downloadCSV = (data: any[]) => {
  const header = Object.keys(data[0]).join(",") + "\n";
  const rows = data
    .map((row) =>
      Object.values(row)
        .map((value) => (typeof value === "string" ? `"${value}"` : value))
        .join(",")
    )
    .join("\n");

  const csv = header + rows;
  const blob = new Blob([csv], { type: "text/csv" });
  saveAs(blob, "tableau.csv");
};

const downloadExcel = (data: any[]) => {
  const header = Object.keys(data[0]).join("\t") + "\n";
  const rows = data
    .map((row) =>
      Object.values(row)
        .map((value) => (typeof value === "string" ? `"${value}"` : value))
        .join("\t")
    )
    .join("\n");

  const excel = header + rows;
  const blob = new Blob([excel], { type: "application/vnd.ms-excel" });
  saveAs(blob, "tableau.xls");
};

export default function CommandeResultPage() {
  const [fileInfo, setFileInfo] = useState<{
    name: string;
    size: number;
  } | null>(null);

  useEffect(() => {
    const storedFile = localStorage.getItem("uploadedFile");
    if (storedFile) {
      setFileInfo(JSON.parse(storedFile));
    }
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-14 lg:px-24 py-20">
      <h1 className="text-3xl font-semibold mb-2">Étude de marché</h1>
      <p className="text-muted-foreground mb-6">
        Lancez une analyse de marché avec le scraper
      </p>

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

      <div className="py-12">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Résultats</h2>
            <p className="text-muted-foreground mb-6">
              Découvrez les résultats de l’analyse
            </p>
          </div>
          <div className="flex gap-4 justify-start">
            <div
              onClick={() => downloadCSV(data)}
              className="flex flex-col w-22 h-22 justify-center items-center cursor-pointer bg-white rounded-md text-center hover:opacity-60 transition"
            >
              <DownloadIcon className="w-7 h-7 text-black mb-2" />
              <span className="text-sm font-semibold">CSV</span>
              <span className="text-xs text-muted-foreground">
                ~{Math.round(data.length * 1.5)} Ko
              </span>
            </div>
            <div
              onClick={() => downloadExcel(data)}
              className="flex flex-col w-22 h-22 justify-center items-center cursor-pointer bg-white rounded-md text-center hover:opacity-60 transition"
            >
              <DownloadIcon className="w-7 h-7 text-black mb-2" />
              <span className="text-sm font-semibold">Excel</span>
              <span className="text-xs text-muted-foreground">
                ~{Math.round(data.length * 1.2)} Ko
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-white rounded-md border border-2">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}
