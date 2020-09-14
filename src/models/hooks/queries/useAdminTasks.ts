import { GET_ADMIN_TASKS } from "$queries";
import { usePaginatedQuery } from "$hooks";
import { TAdminTask } from "$interfaces/AdminTask";
import { IAdminTasksFilter } from "$interfaces/AdminTask";

const defaultFilter = {
  adminTaskTypes: [],
  statuses: [],
  updatedBeforeThan: undefined
};

const normalizeFilter = (filter: IAdminTasksFilter): IAdminTasksFilter => ({
  ...defaultFilter,
  ...filter,
  adminTaskTypes: filter.adminTaskTypes.sort(),
  statuses: filter.statuses.sort()
});

export const useAdminTasks = (filter: IAdminTasksFilter) =>
  usePaginatedQuery<TAdminTask>({
    documentNode: GET_ADMIN_TASKS,
    queryName: "getAdminTasks",
    variables: filter,
    normalizeVariables: normalizeFilter
  });

export type TRefetchGetAdminTasks = (filter: IAdminTasksFilter) => void;
