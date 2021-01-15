import { usePaginatedQuery } from "$hooks";
import { GET_ADMINS } from "$queries";
import { IAdmin } from "$interfaces/Admin";

export const useAdmins = () =>
  usePaginatedQuery<{}, IAdmin>({
    documentNode: GET_ADMINS,
    queryName: "getAdmins",
    variables: {},
    timestampKey: "createdAt"
  });
