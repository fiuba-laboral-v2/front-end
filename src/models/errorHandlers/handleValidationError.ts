import { ShowError } from "$hooks";

export const handleValidationError = (showError: ShowError, callback?: () => void) => () => {
  showError({ message: "Error de validación. Verifique los datos ingresados" });
  if (callback) callback();
};
