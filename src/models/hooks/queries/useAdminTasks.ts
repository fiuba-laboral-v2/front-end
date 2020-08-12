import { useQuery } from "$hooks";
import { GET_ADMIN_TASKS } from "$queries";
import { IAdminTasksFilter, TAdminTask } from "$interfaces/AdminTask";
import { ApolloQueryResult } from "@apollo/client";
import { useState } from "react";
import { uniqBy } from "lodash";

export const useAdminTasks = (filter: IAdminTasksFilter) => {
  const defaultFilter = {
    adminTaskTypes: [],
    statuses: [],
    updatedBeforeThan: undefined
  };
  const [previousTasks, setPreviousTasks] = useState<TAdminTask[]>([]);
  const result = useQuery<IAdminTasksFilter, IUseAdminTasks>(
    GET_ADMIN_TASKS,
    { variables: { ...defaultFilter, ...filter }, fetchPolicy: "no-cache" }
  );

  const getAllTasks = (newResult: { data: IUseAdminTasks }) =>
    uniqBy([...previousTasks, ...newResult.data.getAdminTasks.results], "uuid");

  const fetchMore = () => {
    if (!result.data) return;
    setPreviousTasks(getAllTasks(result));
    const tasks = result.data.getAdminTasks.results;
    return result.refetch({
      ...defaultFilter,
      ...filter,
      updatedBeforeThan: tasks[tasks.length - 1].updatedAt
    });
  };

  const refetch = (newFilter: IAdminTasksFilter) => {
    setPreviousTasks([]);
    return result.refetch({ ...defaultFilter, ...newFilter });
  };

  return {
    ...result,
    fetchMore,
    refetch,
    data: (result.data && {
      getAdminTasks: {
        tasks: getAllTasks(result),
        shouldFetchMore: result.data.getAdminTasks.shouldFetchMore
      }
    })
  };
};

export type TRefetchGetAdminTasks = (
  filter: IAdminTasksFilter
) => Promise<ApolloQueryResult<IUseAdminTasks>>;

export interface IGetAdminTasks {
  results: TAdminTask[];
  shouldFetchMore: boolean;
}

interface IUseAdminTasks {
  getAdminTasks: IGetAdminTasks;
}
