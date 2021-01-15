import { DELETE_COMPANY_USER } from "$mutations";
import { IMutationOptions, useMutation } from "$hooks";

export const useDeleteCompanyUser = () => {
  const { mutation, ...result } = useMutation<IUseDeleteCompanyUser, IResponseProps>(
    DELETE_COMPANY_USER
  );

  const deleteCompanyUser = ({
    variables,
    ...options
  }: IMutationOptions<IResponseProps, IUseDeleteCompanyUser>) =>
    mutation({
      variables,
      ...options,
      update: cache => cache.evict({ id: `CompanyUser:${variables?.uuid}` })
    });

  return { deleteCompanyUser, ...result };
};

interface IResponseProps {
  deleteCompanyUser: number;
}

export interface IUseDeleteCompanyUser {
  uuid: string;
}
