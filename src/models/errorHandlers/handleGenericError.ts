import { ShowError } from "$hooks";

export const handleGenericError = (showError: ShowError, callback?: () => void) => () => {
  showError({ message: "Hubo un error desconocido" });
  if (callback) callback();
};
