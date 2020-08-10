import { IFormErrorHandlers } from "./formErrorHandlers";

export const FiubaServiceFetchErrorHandler = ({ enqueueSnackbar }: IFormErrorHandlers) =>
  enqueueSnackbar(
    "El servicio de autenticación de fiuba a fallado, espere hasta que sea restablecido",
    { variant: "error" }
    );
