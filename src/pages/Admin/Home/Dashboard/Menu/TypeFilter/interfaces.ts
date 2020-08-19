import { TAdminTaskType } from "$interfaces/AdminTask";

export interface ITypeFilterTranslations {
  title: string;
  companyIconTitle: string;
  applicantIconTitle: string;
  offerIconTitle: string;
}

interface ITypeFilterProps {
  className?: string;
  types: TAdminTaskType[];
}

export interface ITypeFilterContainerProps extends ITypeFilterProps {
  onFilterByType: (types: TAdminTaskType[]) => void;
}

export interface ITypeFilterComponentProps extends ITypeFilterProps {
  translations: ITypeFilterTranslations;
  types: TAdminTaskType[];
  toggleType: (adminTaskType: TAdminTaskType) => void;
}
