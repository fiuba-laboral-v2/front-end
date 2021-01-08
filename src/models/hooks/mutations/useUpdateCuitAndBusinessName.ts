import { UPDATE_COMPANY_CRITICAL_ATTRIBUTES } from "$mutations";
import { useMutation } from "$hooks";

export const useUpdateCuitAndBusinessName = () => {
  const { mutation, ...result } = useMutation<IUseUpdateCuitAndBusinessName>(
    UPDATE_COMPANY_CRITICAL_ATTRIBUTES
  );
  return { updateCuitAndBusinessName: mutation, ...result };
};

export interface IUseUpdateCuitAndBusinessName {
  cuit: string;
  businessName: string;
}
