import { LOGOUT } from "$mutations";
import { useMutation } from "$hooks";

export const useLogout = () => useMutation(LOGOUT);
