import { UPDATE_ADMIN } from "$mutations";
import { GET_ADMINS } from "$queries";
import { IMutationOptions, useMutation } from "$hooks";
import { IAdmin } from "$interfaces/Admin";
import { IFiubaUserUpdateInput } from "$interfaces/User";
import { IPaginatedResult } from "$hooks/queries/interfaces";
import { Secretary } from "$interfaces/Secretary";

export const useUpdateAdmin = () => {
  const { mutation, ...result } = useMutation<IUpdateAdminInput, IResponseProps>(UPDATE_ADMIN);

  const updateAdmin = ({
    variables,
    ...options
  }: IMutationOptions<IResponseProps, IUpdateAdminInput>) =>
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
                    results: [data?.updateAdmin]
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

  return { updateAdmin, ...result };
};

interface IResponseProps {
  updateAdmin: IAdmin;
}

export interface IUpdateAdminInput {
  uuid: string;
  secretary: Secretary;
  user: IFiubaUserUpdateInput;
}
