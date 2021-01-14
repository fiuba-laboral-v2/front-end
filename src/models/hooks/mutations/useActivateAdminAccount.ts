import { ACTIVATE_ADMIN_ACCOUNT } from "$mutations";
import { GET_ADMINS } from "$queries";
import { IMutationOptions, useMutation } from "$hooks";
import { IAdmin } from "$interfaces/Admin";
import { IPaginatedResult } from "../queries/interfaces";

export const useActivateAdminAccount = () => {
  const { mutation, ...result } = useMutation<IUseActivateAdminAccountInput, IResponseProps>(
    ACTIVATE_ADMIN_ACCOUNT
  );

  const activateAdminAccount = ({
    variables,
    ...options
  }: IMutationOptions<IResponseProps, IUseActivateAdminAccountInput>) =>
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
                    results: [data?.activateAdminAccount]
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

  return { activateAdminAccount, ...result };
};

interface IResponseProps {
  activateAdminAccount: IAdmin;
}

export interface IUseActivateAdminAccountInput {
  uuid: string;
}
