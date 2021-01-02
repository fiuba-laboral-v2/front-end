import { UPDATE_PADRON } from "$mutations";
import { useMutation } from "$hooks";

export const useUpdatePadron = () => {
  const { mutation, ...result } = useMutation<IUseUpdatePadron>(UPDATE_PADRON);
  return { useUpdatePadron: mutation, ...result };
};

export interface IUseUpdatePadron {
  padron: number;
}
