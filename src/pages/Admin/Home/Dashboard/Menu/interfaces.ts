import { IAdminTasksFilter } from "$interfaces/AdminTask";
import { TRefetchGetAdminTasks } from "$hooks/queries";

export interface IMenuContainerProps {
  filter: IAdminTasksFilter;
  onSelectFilter?: (filter: IAdminTasksFilter) => void;
  refetchGetAdminTasks?: TRefetchGetAdminTasks;
}

export interface IMenuProps {
  onFilter: <T extends unknown>(key: keyof IAdminTasksFilter, items: T[]) => Promise<void>;
  filter: IAdminTasksFilter;
}
