import { SAVE_ADMIN } from "$mutations";
import { GET_ADMINS } from "$queries";
import { IMutationOptions, useMutation } from "$hooks";
import { IAdmin } from "$interfaces/Admin";
import { IFiubaUserInput } from "$interfaces/User";
import { IPaginatedResult } from "$hooks/queries/interfaces";
import { Secretary } from "$interfaces/Secretary";

export const useSaveAdmin = () => {
  const { mutation, ...result } = useMutation<ISaveAdminInput, IResponseProps>(SAVE_ADMIN);

  const saveAdmin = ({
    variables,
    ...options
  }: IMutationOptions<IResponseProps, ISaveAdminInput>) =>
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
                    results: [data?.saveAdmin]
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

  return { saveAdmin, ...result };
};

interface IResponseProps {
  saveAdmin: IAdmin;
}

export interface ISaveAdminInput {
  secretary: Secretary;
  user: IFiubaUserInput;
}
