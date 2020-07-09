import { ApprovableEntityType, IApprovableFilter } from "$interfaces/AdminTask";
import { TRefetchGetApprovables } from "$hooks/queries";

export interface IMenuContainerProps {
  filter: IApprovableFilter;
  onSelectFilter: (filter: IApprovableFilter) => void;
  refetchApprovableEntities?: TRefetchGetApprovables;
}

export interface IMenuProps {
  onFilterByType: (types: ApprovableEntityType[]) => void;
  filter: IApprovableFilter;
}
