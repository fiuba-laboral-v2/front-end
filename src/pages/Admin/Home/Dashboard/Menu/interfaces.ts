import { ApprovableEntityType, IApprovableFilter } from "$interfaces/Approvable";
import { TRefetchPendingEntities } from "$hooks/queries";

export interface IMenuTranslations {
  companyIconTitle: string;
  applicantIconTitle: string;
}

export interface IMenuContainerProps {
  filter: IApprovableFilter;
  onSelectFilter: (filter: IApprovableFilter) => void;
  refetchApprovableEntities: TRefetchPendingEntities;
}

export interface IMenuProps {
  translations: IMenuTranslations;
  addEntityType: (entityType: ApprovableEntityType) => void;
  filter: IApprovableFilter;
}
