import { IFormErrorHandlers } from "./formErrorHandlers";

export const FiubaServiceFetchErrorHandler = ({ enqueueSnackbar }: IFormErrorHandlers) =>
  enqueueSnackbar(
    "Error en el servicio de autenticación de FIUBA",
    { variant: "error" }
  );
