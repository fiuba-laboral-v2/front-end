import { UPDATE_CUIT_AND_BUSINESS_NAME } from "$mutations";
import { useMutation } from "$hooks";

export const useUpdateCuitAndBusinessName = () => {
  const { mutation, ...result } = useMutation<IUseUpdateCuitAndBusinessName>(
    UPDATE_CUIT_AND_BUSINESS_NAME
  );
  return { updateCuitAndBusinessName: mutation, ...result };
};

export interface IUseUpdateCuitAndBusinessName {
  cuit: string;
  businessName: string;
}
