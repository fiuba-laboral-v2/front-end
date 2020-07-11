import { TAdminTaskType } from "$interfaces/AdminTask";

export interface ITypeFilterTranslations {
  title: string;
  companyIconTitle: string;
  applicantIconTitle: string;
}

export interface ITypeFilterContainerProps {
  className?: string;
  types: TAdminTaskType[];
  onFilterByType: (types: TAdminTaskType[]) => void;
}

export interface ITypeFilterProps extends Omit<ITypeFilterContainerProps, "onFilterByType"> {
  translations: ITypeFilterTranslations;
  types: TAdminTaskType[];
  toggleType: (adminTaskType: TAdminTaskType) => void;
}
