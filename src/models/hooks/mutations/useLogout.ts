import { LOGOUT } from "$mutations";
import { SessionStorageRepository } from "$repositories";
import { useMutation, UseMutationResult } from "$hooks";

export const useLogout = () => {
  const { mutation, ...result } = useMutation(LOGOUT);

  const logout = async (): Promise<UseMutationResult<{}>> => {
    const mutationResult = await mutation();
    SessionStorageRepository.clear();
    return mutationResult;
  };

  return { logout, ...result };
};
