import { DEACTIVATE_ADMIN_ACCOUNT } from "$mutations";
import { GET_ADMINS } from "$queries";
import { IMutationOptions, useMutation } from "$hooks";
import { IAdmin } from "$interfaces/Admin";
import { IPaginatedResult } from "../queries/interfaces";

export const useDeactivateAdminAccount = () => {
  const { mutation, ...result } = useMutation<IUseDeactivateAdminAccountInput, IResponseProps>(
    DEACTIVATE_ADMIN_ACCOUNT
  );

  const deactivateAdminAccount = ({
    variables,
    ...options
  }: IMutationOptions<IResponseProps, IUseDeactivateAdminAccountInput>) =>
    mutation({
      variables,
      ...options,
      update: (cache, { data }) => {
        cache.modify({
          fields: {
            getAdmins: async (existingAdmins: IPaginatedResult<IAdmin>) => {
              await cache.writeQuery({
                data: {
                  getAdmins: {
                    shouldFetchMore: true,
                    results: [data?.deactivateAdminAccount]
                  }
                },
                query: GET_ADMINS
              });
              return existingAdmins;
            }
          }
        });
      }
    });

  return { deactivateAdminAccount, ...result };
};

interface IResponseProps {
  deactivateAdminAccount: IAdmin;
}

export interface IUseDeactivateAdminAccountInput {
  uuid: string;
}
