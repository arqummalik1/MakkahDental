export type ClinicService = {
  id: number;
  name: string;
  iconKey:
    | "rootCanal"
    | "braces"
    | "crowns"
    | "laser"
    | "wisdom"
    | "surgery"
    | "implants"
    | "whitening"
    | "cosmetic"
    | "prosthodontics";
  description: string;
};
