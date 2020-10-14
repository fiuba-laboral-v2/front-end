import { IFormErrorHandlers } from "./formErrorHandlers";

export const handleGenericError = (
  { enqueueSnackbar }: IFormErrorHandlers,
  callback?: () => void
) => () => {
  enqueueSnackbar("Hubo un error desconocido", { variant: "error" });
  if (callback) callback();
};
