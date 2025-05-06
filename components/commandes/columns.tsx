import { ColumnDef } from "@tanstack/react-table";
import { ShoppingCart } from "lucide-react";
export type Produit = {
  panier: string;
  refSDM: string;
  libelleSDM: string;
  fabricant: string;
  quantite: number;
  prixTTC: number;
  siteWeb: string;
  libelleSite: string;
  refSite: string;
};

export const columns: ColumnDef<Produit>[] = [
  {
    accessorKey: "panier",
    header: "Panier",
    cell: ({ row }) => (
      <a
        href={row.getValue("panier")}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-black text-white rounded-md w-10 h-10 hover:opacity-80 transition"
      >
        <ShoppingCart className="w-4 h-4" />
      </a>
    ),
  },
  {
    accessorKey: "refSDM",
    header: "Réf SDM",
    enableSorting: true,
  },
  {
    accessorKey: "libelleSDM",
    header: "Libellé SDM",
  },
  {
    accessorKey: "fabricant",
    header: "Fabricant",
    enableSorting: true,
  },
  {
    accessorKey: "quantite",
    header: "Quantité",
  },
  {
    accessorKey: "prixTTC",
    header: "Prix TTC",
    enableSorting: true,
    cell: ({ row }) => `${row.getValue("prixTTC")} €`,
  },
  {
    accessorKey: "siteWeb",
    header: "Site web",
    cell: ({ row }) => (
      <a
        href={row.getValue("siteWeb")}
        className="text-blue-600 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {row.getValue("siteWeb")}
      </a>
    ),
  },
  { accessorKey: "libelleSite", header: "Libellé site" },
  { accessorKey: "refSite", header: "Réf site" },
];
