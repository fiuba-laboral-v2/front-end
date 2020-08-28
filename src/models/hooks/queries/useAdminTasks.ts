import { useQuery } from "$hooks";
import { GET_ADMIN_TASKS } from "$queries";
import { IAdminTasksFilter, TAdminTask } from "$interfaces/AdminTask";
import { FetchResult, OptionalFetchResult } from "$interfaces/Pagination";
import { IPaginatedResult } from "./interface";

export const useAdminTasks = (filter: IAdminTasksFilter) => {
  const defaultFilter = {
    adminTaskTypes: [],
    statuses: [],
    updatedBeforeThan: undefined
  };
  const result = useQuery<IAdminTasksFilter, IUseAdminTasks>(
    GET_ADMIN_TASKS,
    {
      variables: { ...defaultFilter, ...filter },
      fetchPolicy: "network-only"
    }
  );

  const fetchMore = () => {
    const tasks = result.data?.getAdminTasks.results;
    if (!tasks) return;
    const lastTask = tasks[tasks.length - 1];
    return result.fetchMore({
      query: GET_ADMIN_TASKS,
      variables: {
        ...filter,
        updatedBeforeThan: {
          dateTime: lastTask.updatedAt,
          uuid: lastTask.uuid
        }
      }
    }) as FetchResult<IUseAdminTasks>;
  };

  return {
    ...result,
    fetchMore
  };
};

export type TRefetchGetAdminTasks = (
  filter: IAdminTasksFilter
) => OptionalFetchResult<IUseAdminTasks>;

export interface IUseAdminTasks {
  getAdminTasks: IPaginatedResult<TAdminTask>;
}
