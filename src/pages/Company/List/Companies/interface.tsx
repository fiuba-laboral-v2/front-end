import { ICompany } from "$interfaces/Company";

export interface ICompaniesProps {
  companies: ICompany[];
  onClickView: (padron: number) => void;
  viewButtonText?: string;
  loading: boolean;
}

export interface ICompaniesTranslations {
  view: string;
}
