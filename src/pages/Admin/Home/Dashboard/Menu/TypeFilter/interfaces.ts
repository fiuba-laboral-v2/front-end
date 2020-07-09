import { AdminTaskType } from "$interfaces/AdminTask";

export interface ITypeFilterTranslations {
  title: string;
  companyIconTitle: string;
  applicantIconTitle: string;
}

export interface ITypeFilterContainerProps {
  types: AdminTaskType[];
  onFilterByType: (types: AdminTaskType[]) => void;
}

export interface ITypeFilterProps {
  translations: ITypeFilterTranslations;
  types: AdminTaskType[];
  toggleType: (selected: boolean, entityType: AdminTaskType) => void;
}
