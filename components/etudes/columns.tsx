import { ColumnDef } from "@tanstack/react-table";

export type Produit = {
  ref: string;
  libelleArt: string;
  fabricant: string;

  prixTTC_Dental: number;
  refArt_Dental: string;
  refSite_Dental: string;
  libelleSite_Dental: string;

  prixTTC_Doctor: number;
  refArt_Doctor: string;
  refSite_Doctor: string;
  libelleSite_Doctor: string;

  prixTTC_Mega: number;
  refArt_Mega: string;
  refSite_Mega: string;
  libelleSite_Mega: string;

  prixTTC_Promo: number;
  refArt_Promo: string;
  refSite_Promo: string;
  libelleSite_Promo: string;
};

const makeSiteColumns = (site: string, label: string): ColumnDef<Produit>[] => [
  {
    accessorKey: `prixTTC_${site}`,
    header: () => (
      <div className="flex flex-col">
        <span>Prix TTC</span>
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
    ),
    cell: ({ row }) => `${row.getValue(`prixTTC_${site}`)} €`,
  },
  {
    accessorKey: `refArt_${site}`,
    header: () => (
      <div className="flex flex-col">
        <span>Référence Article</span>
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
    ),
  },
  {
    accessorKey: `refSite_${site}`,
    header: () => (
      <div className="flex flex-col">
        <span>Référence Site</span>
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
    ),
  },
  {
    accessorKey: `libelleSite_${site}`,
    header: () => (
      <div className="flex flex-col">
        <span>Libellé Site</span>
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
    ),
  },
];

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
  ...makeSiteColumns("Dental", "Dental Good Deal"),
  ...makeSiteColumns("Doctor", "Doctor Strong"),
  ...makeSiteColumns("Mega", "Mega Dental"),
  ...makeSiteColumns("Promo", "Promodentaire"),
];
