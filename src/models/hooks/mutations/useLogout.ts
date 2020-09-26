import { LOGOUT } from "$mutations";
import { useMutation } from "$hooks";

export const useLogout = () => {
  const { mutation } = useMutation(LOGOUT);
  return mutation;
};
