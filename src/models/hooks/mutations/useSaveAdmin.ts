import { SAVE_ADMIN } from "$mutations";
import { useMutation } from "$hooks";
import { IAdmin } from "$interfaces/Admin";
import { IFiubaUserInput } from "$interfaces/User";
import { Secretary } from "$interfaces/Secretary";

export const useSaveAdmin = () => {
  const { mutation, ...result } = useMutation<ISaveAdminInput, IResponseProps>(SAVE_ADMIN);
  return { saveAdmin: mutation, ...result };
};

interface IResponseProps {
  saveAdmin: IAdmin;
}

export interface ISaveAdminInput {
  secretary: Secretary;
  user: IFiubaUserInput;
}
