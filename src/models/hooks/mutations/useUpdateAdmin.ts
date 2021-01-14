import { UPDATE_ADMIN } from "$mutations";
import { IMutationOptions, useMutation } from "$hooks";
import { IAdmin } from "$interfaces/Admin";
import { IFiubaUserUpdateInput } from "$interfaces/User";
import { Secretary } from "$interfaces/Secretary";

export const useUpdateAdmin = () => {
  const { mutation, ...result } = useMutation<IUpdateAdminInput, IResponseProps>(UPDATE_ADMIN);

  const updateAdmin = ({
    variables,
    ...options
  }: IMutationOptions<IResponseProps, IUpdateAdminInput>) => mutation({ variables, ...options });

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
