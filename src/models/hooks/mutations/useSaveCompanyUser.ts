import { SAVE_COMPANY_USER } from "$mutations";
import { GET_COMPANY_USERS } from "$queries";
import { IMutationOptions, useMutation } from "$hooks";
import { IPaginatedResult } from "$hooks/queries/interfaces";
import { ICompanyUser } from "$interfaces/CompanyUser";
import { ICompanyUserInput } from "$interfaces/User";

export const useSaveCompanyUser = () => {
  const { mutation, ...result } = useMutation<ISaveCompanyUserInput, IResponseProps>(
    SAVE_COMPANY_USER
  );

  const saveCompanyUser = ({
    variables,
    ...options
  }: IMutationOptions<IResponseProps, ISaveCompanyUserInput>) =>
    mutation({
      variables,
      ...options,
      update: (cache, { data }) => {
        cache.modify({
          fields: {
            getCompanyUsers: (existingCompanyUsers: IPaginatedResult<ICompanyUser>) => {
              const newTodoRef = cache.writeQuery({
                data: {
                  getCompanyUsers: {
                    results: data?.saveCompanyUser,
                    shouldFetchMore: true
                  }
                },
                query: GET_COMPANY_USERS
              });
              return {
                ...existingCompanyUsers,
                results: {
                  newTodoRef,
                  ...existingCompanyUsers.results
                }
              };
            }
          }
        });
      }
    });

  return { saveCompanyUser, ...result };
};

interface IResponseProps {
  saveCompanyUser: ICompanyUser;
}

export interface ISaveCompanyUserInput {
  user: ICompanyUserInput;
}
