import { IFormErrorHandlers } from "./formErrorHandlers";

export const handleValidationError = (
  { enqueueSnackbar }: IFormErrorHandlers,
  callback?: () => void
) =>
  () => {
    enqueueSnackbar(
      "Error de validación. Verifique los datos ingresados",
      { variant: "error" }
    );
    if (callback) callback();
  };
