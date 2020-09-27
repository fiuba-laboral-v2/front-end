import { LOGOUT } from "$mutations";
import { useMutation } from "$hooks";

export const useLogout = () => {
  const { mutation: logout, ...result } = useMutation(LOGOUT);
  return { logout, ...result };
};
