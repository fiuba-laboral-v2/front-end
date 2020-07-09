import { useQuery } from "$hooks";
import { GET_APPROVABLES } from "$queries";
import { IApprovable, IApprovableFilter } from "$interfaces/Approvable/";
import { ApolloQueryResult } from "apollo-client/core/types";

export const useGetApprovables = (filter: IApprovableFilter) =>
  useQuery<IApprovableFilter, IUseGetApprovables>(
    GET_APPROVABLES,
    { variables: filter, fetchPolicy: "no-cache" }
  );

export type TRefetchGetApprovables = (
  filter: IApprovableFilter
) => Promise<ApolloQueryResult<IUseGetApprovables>>;

interface IUseGetApprovables {
  getApprovables: IApprovable[];
}
