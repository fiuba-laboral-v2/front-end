import { TAdminTaskType, IAdminTasksFilter } from "$interfaces/AdminTask";
import { TRefetchGetAdminTasks } from "$hooks/queries";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export interface IMenuContainerProps {
  filter: IAdminTasksFilter;
  onSelectFilter: (filter: IAdminTasksFilter) => void;
  refetchGetAdminTasks?: TRefetchGetAdminTasks;
}

export interface IMenuProps {
  onFilterByType: (types: TAdminTaskType[]) => void;
  onFilterByStatus: (statuses: ApprovalStatus[]) => void;
  filter: IAdminTasksFilter;
}
