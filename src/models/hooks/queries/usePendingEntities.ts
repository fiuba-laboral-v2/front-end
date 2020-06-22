import { useQuery } from "$hooks";
import { GET_PENDING_ENTITIES } from "$queries";
import { IApprovable } from "$interfaces/Approvable";

export const usePendingEntities = () =>
  useQuery<{}, { getPendingEntities: IApprovable[] }>(GET_PENDING_ENTITIES);
