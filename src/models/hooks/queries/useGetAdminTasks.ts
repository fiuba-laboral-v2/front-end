import { useQuery } from "$hooks";
import { GET_ADMIN_TASKS } from "$queries";
import { IApprovable, IApprovableFilter } from "$interfaces/Approvable/";
import { ApolloQueryResult } from "apollo-client/core/types";

export const useGetAdminTasks = (filter: IApprovableFilter) =>
  useQuery<IApprovableFilter, IUseGetApprovables>(
    GET_ADMIN_TASKS,
    { variables: filter, fetchPolicy: "no-cache" }
  );

export type TRefetchGetApprovables = (
  filter: IApprovableFilter
) => Promise<ApolloQueryResult<IUseGetApprovables>>;

interface IUseGetApprovables {
  getAdminTasks: IApprovable[];
}
