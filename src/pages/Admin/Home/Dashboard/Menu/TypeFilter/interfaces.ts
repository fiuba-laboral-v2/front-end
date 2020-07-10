import { TAdminTaskType } from "$interfaces/AdminTask";

export interface ITypeFilterTranslations {
  title: string;
  companyIconTitle: string;
  applicantIconTitle: string;
}

export interface ITypeFilterContainerProps {
  types: TAdminTaskType[];
  onFilterByType: (types: TAdminTaskType[]) => void;
}

export interface ITypeFilterProps {
  translations: ITypeFilterTranslations;
  types: TAdminTaskType[];
  toggleType: (selected: boolean, adminTaskType: TAdminTaskType) => void;
}
