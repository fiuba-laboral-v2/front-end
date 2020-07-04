import { ApprovableEntityType, IApprovableFilter } from "$interfaces/Approvable";

export interface IMenuTranslations {
  companyIconTitle: string;
  applicantIconTitle: string;
}

export interface IMenuContainerProps {
  filter: IApprovableFilter;
  onSelectFilter: (filter: IApprovableFilter) => void;
}

export interface IMenuProps {
  translations: IMenuTranslations;
  addEntityType: (entityType: ApprovableEntityType) => void;
}
