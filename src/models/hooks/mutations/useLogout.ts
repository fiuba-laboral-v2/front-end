import { LOGOUT } from "$mutations";
import { useMutation } from "$hooks";

export const useLogout = () => {
  const { mutation, ...result } = useMutation(LOGOUT);
  return { logout: mutation, ...result };
};
