import { AdminTaskType, IAdminTasksFilter } from "$interfaces/AdminTask";
import { TRefetchGetApprovables } from "$hooks/queries";

export interface IMenuContainerProps {
  filter: IAdminTasksFilter;
  onSelectFilter: (filter: IAdminTasksFilter) => void;
  refetchApprovableEntities?: TRefetchGetApprovables;
}

export interface IMenuProps {
  onFilterByType: (types: AdminTaskType[]) => void;
  filter: IAdminTasksFilter;
}
