import { ColumnDef } from "@tanstack/react-table";

export type Produit = {
  ref: string;
  libelleArt: string;
  fabricant: string;
  libelleSite: string;
  refSite: string;
  prixTTC: number;
  refArt: string;
};

export const columns: ColumnDef<Produit>[] = [
  {
    accessorKey: "ref",
    header: "Référence",
    enableSorting: true,
  },
  {
    accessorKey: "libelleArt",
    header: "Libellé article",
  },
  {
    accessorKey: "fabricant",
    header: "Fabricant",
    enableSorting: true,
  },
  {
    accessorKey: "prixTTC",
    header: "Prix TTC",
    enableSorting: true,
    cell: ({ row }) => `${row.getValue("prixTTC")} €`,
  },
  {
    accessorKey: "libelleSite",
    header: "Libellé site",
  },
  {
    accessorKey: "refSite",
    header: "Réf site",
  },
  {
    accessorKey: "refArt",
    header: "Référence article",
  },
];
