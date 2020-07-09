import { useQuery } from "$hooks";
import { GET_ADMIN_TASKS } from "$queries";
import { IApprovable, IApprovableFilter } from "$interfaces/AdminTask";
import { ApolloQueryResult } from "apollo-client/core/types";

export const useGetAdminTasks = (filter: IApprovableFilter) =>
  useQuery<IApprovableFilter, IUseGetAdminTasks>(
    GET_ADMIN_TASKS,
    { variables: filter, fetchPolicy: "no-cache" }
  );

export type TRefetchGetApprovables = (
  filter: IApprovableFilter
) => Promise<ApolloQueryResult<IUseGetAdminTasks>>;

interface IUseGetAdminTasks {
  getAdminTasks: IApprovable[];
}
