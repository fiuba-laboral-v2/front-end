import { useQuery } from "$hooks";
import { GET_ADMIN_TASKS } from "$queries";
import { IAdminTasksFilter, TAdminTask } from "$interfaces/AdminTask";
import { OptionalFetchResult } from "$interfaces/Pagination";
import { IPaginatedResult } from "./interface";

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

export const useAdminTasks = (filter: IAdminTasksFilter) => {
  const result = useQuery<IAdminTasksFilter, IUseAdminTasks>(
    GET_ADMIN_TASKS,
    {
      variables: normalizeFilter(filter),
      fetchPolicy: "network-only",
      notifyOnNetworkStatusChange: true
    }
  );

  const fetchMore = () => {
    const tasks = result.data?.getAdminTasks.results;
    if (!tasks) return;
    const lastTask = tasks[tasks.length - 1];
    return result.fetchMore({
      query: GET_ADMIN_TASKS,
      variables: normalizeFilter({
        ...filter,
        updatedBeforeThan: {
          dateTime: lastTask.updatedAt,
          uuid: lastTask.uuid
        }
      })
    });
  };

  const refetch = async (newFilter: IAdminTasksFilter) =>
    result.refetch(normalizeFilter(newFilter));

  return {
    ...result,
    fetchMore,
    refetch
  };
};

export type TRefetchGetAdminTasks = (
  filter: IAdminTasksFilter
) => OptionalFetchResult<IUseAdminTasks>;

export interface IUseAdminTasks {
  getAdminTasks: IPaginatedResult<TAdminTask>;
}
