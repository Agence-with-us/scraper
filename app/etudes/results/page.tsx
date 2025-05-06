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

    prixTTC_Dental: 59.99,
    refArt_Dental: "DGD123",
    refSite_Dental: "DGD-SITE-001",
    libelleSite_Dental: "Dental Good Deal",

    prixTTC_Doctor: 58.5,
    refArt_Doctor: "DS456",
    refSite_Doctor: "DS-SITE-001",
    libelleSite_Doctor: "Doctor Strong",

    prixTTC_Mega: 60.99,
    refArt_Mega: "MD789",
    refSite_Mega: "MD-SITE-001",
    libelleSite_Mega: "Mega Dental",

    prixTTC_Promo: 57.45,
    refArt_Promo: "PD321",
    refSite_Promo: "PD-SITE-001",
    libelleSite_Promo: "Promodentaire",
  },
  {
    ref: "B12345",
    libelleArt: "Produit B",
    fabricant: "MarqueY",

    prixTTC_Dental: 32.99,
    refArt_Dental: "DGD124",
    refSite_Dental: "DGD-SITE-002",
    libelleSite_Dental: "Dental Good Deal",

    prixTTC_Doctor: 33.5,
    refArt_Doctor: "DS457",
    refSite_Doctor: "DS-SITE-002",
    libelleSite_Doctor: "Doctor Strong",

    prixTTC_Mega: 35.0,
    refArt_Mega: "MD790",
    refSite_Mega: "MD-SITE-002",
    libelleSite_Mega: "Mega Dental",

    prixTTC_Promo: 31.25,
    refArt_Promo: "PD322",
    refSite_Promo: "PD-SITE-002",
    libelleSite_Promo: "Promodentaire",
  },
  {
    ref: "C98765",
    libelleArt: "Produit C",
    fabricant: "MarqueZ",

    prixTTC_Dental: 88.99,
    refArt_Dental: "DGD125",
    refSite_Dental: "DGD-SITE-003",
    libelleSite_Dental: "Dental Good Deal",

    prixTTC_Doctor: 89.99,
    refArt_Doctor: "DS458",
    refSite_Doctor: "DS-SITE-003",
    libelleSite_Doctor: "Doctor Strong",

    prixTTC_Mega: 91.5,
    refArt_Mega: "MD791",
    refSite_Mega: "MD-SITE-003",
    libelleSite_Mega: "Mega Dental",

    prixTTC_Promo: 87.0,
    refArt_Promo: "PD323",
    refSite_Promo: "PD-SITE-003",
    libelleSite_Promo: "Promodentaire",
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
