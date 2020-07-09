import { useQuery } from "$hooks";
import { GET_ADMIN_TASKS } from "$queries";
import { AdminTask, IAdminTasksFilter } from "$interfaces/AdminTask";
import { ApolloQueryResult } from "apollo-client/core/types";

export const useGetAdminTasks = (filter: IAdminTasksFilter) =>
  useQuery<IAdminTasksFilter, IUseGetAdminTasks>(
    GET_ADMIN_TASKS,
    { variables: filter, fetchPolicy: "no-cache" }
  );

export type TRefetchGetAdminTasks = (
  filter: IAdminTasksFilter
) => Promise<ApolloQueryResult<IUseGetAdminTasks>>;

interface IUseGetAdminTasks {
  getAdminTasks: AdminTask[];
}
