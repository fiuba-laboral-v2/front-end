import { DEACTIVATE_ADMIN_ACCOUNT } from "$mutations";
import { IMutationOptions, useMutation } from "$hooks";
import { IAdmin } from "$interfaces/Admin";

export const useDeactivateAdminAccount = () => {
  const { mutation, ...result } = useMutation<IUseDeactivateAdminAccountInput, IResponseProps>(
    DEACTIVATE_ADMIN_ACCOUNT
  );

  const deactivateAdminAccount = ({
    variables,
    ...options
  }: IMutationOptions<IResponseProps, IUseDeactivateAdminAccountInput>) =>
    mutation({ variables, ...options });

  return { deactivateAdminAccount, ...result };
};

interface IResponseProps {
  deactivateAdminAccount: IAdmin;
}

export interface IUseDeactivateAdminAccountInput {
  uuid: string;
}
