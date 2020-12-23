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
            getAdmins: (existingAdmins: IPaginatedResult<IAdmin>) => {
              if (!data) return;
              const newAdminRef = cache.writeQuery({
                data: {
                  getAdmins: {
                    results: data.saveAdmin,
                    shouldFetchMore: true
                  }
                },
                query: GET_ADMINS
              });
              return {
                ...existingAdmins,
                results: {
                  newAdminRef,
                  ...existingAdmins.results
                }
              };
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
