import { ApprovableEntityType, IApprovableFilter } from "$interfaces/Approvable";
import { TRefetchPendingEntities } from "$hooks/queries";

export interface IMenuContainerProps {
  filter: IApprovableFilter;
  onSelectFilter: (filter: IApprovableFilter) => void;
  refetchApprovableEntities: TRefetchPendingEntities;
}

export interface IMenuProps {
  onFilterByType: (types: ApprovableEntityType[]) => void;
  filter: IApprovableFilter;
}
