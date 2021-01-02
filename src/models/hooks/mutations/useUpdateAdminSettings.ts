import { UPDATE_ADMIN_SETTINGS } from "$mutations";
import { useMutation } from "$hooks";
import { IAdminSettings } from "$interfaces/AdminSettings";

export const useUpdateAdminSettings = () => {
  const { mutation, ...result } = useMutation<
    IAdminSettings,
    { updateAdminSettings: IAdminSettings }
  >(UPDATE_ADMIN_SETTINGS);
  return { updateAdminSettings: mutation, ...result };
};
