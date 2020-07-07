import { useQuery } from "$hooks";
import { GET_PENDING_ENTITIES } from "$queries";
import { IApprovable, IApprovableFilter } from "$interfaces/Approvable/";
import { ApolloQueryResult } from "apollo-client/core/types";

export const usePendingEntities = (filter: IApprovableFilter) =>
  useQuery<IApprovableFilter, IUsePendingEntities>(
    GET_PENDING_ENTITIES,
    { variables: filter, fetchPolicy: "no-cache" }
  );

export type TRefetchPendingEntities = (
  filter: IApprovableFilter
) => Promise<ApolloQueryResult<IUsePendingEntities>>;

export interface IUsePendingEntities {
  getPendingEntities: IApprovable[];
}
