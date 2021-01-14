import { ACTIVATE_ADMIN_ACCOUNT } from "$mutations";
import { IMutationOptions, useMutation } from "$hooks";
import { IAdmin } from "$interfaces/Admin";

export const useActivateAdminAccount = () => {
  const { mutation, ...result } = useMutation<IUseActivateAdminAccountInput, IResponseProps>(
    ACTIVATE_ADMIN_ACCOUNT
  );

  const activateAdminAccount = ({
    variables,
    ...options
  }: IMutationOptions<IResponseProps, IUseActivateAdminAccountInput>) =>
    mutation({ variables, ...options });

  return { activateAdminAccount, ...result };
};

interface IResponseProps {
  activateAdminAccount: IAdmin;
}

export interface IUseActivateAdminAccountInput {
  uuid: string;
}
