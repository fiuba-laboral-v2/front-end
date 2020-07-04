import { useQuery } from "$hooks";
import { GET_PENDING_ENTITIES } from "$queries";
import { IApprovable, IApprovableFilter } from "$interfaces/Approvable/";

export const usePendingEntities = (filter: IApprovableFilter) =>
  useQuery<IApprovableFilter, IUsePendingEntities>(
    GET_PENDING_ENTITIES,
    { variables: filter }
  );

export interface IUsePendingEntities {
  getPendingEntities: IApprovable[];
}
