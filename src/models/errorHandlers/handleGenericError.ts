import { IFormErrorHandlers } from "./formErrorHandlers";

export const handleGenericError = (
  { enqueueSnackbar }: IFormErrorHandlers,
  callback?: () => void
) =>
  () => {
    enqueueSnackbar("Un error inesperado ha ocurrido", { variant: "error" });
    if (callback) callback();
  };
