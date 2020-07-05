import { ApprovableEntityType, IApprovableFilter } from "$interfaces/Approvable";

export interface ITypeFilterTranslations {
  companyIconTitle: string;
  applicantIconTitle: string;
}

export interface ITypeFilterContainerProps {
  types: ApprovableEntityType[];
  onChangeFilter: (types: ApprovableEntityType[]) => void;
}

export interface ITypeFilterProps {
  translations: ITypeFilterTranslations;
  types: ApprovableEntityType[];
  toggleType: (selected: boolean, entityType: ApprovableEntityType) => void;
}
