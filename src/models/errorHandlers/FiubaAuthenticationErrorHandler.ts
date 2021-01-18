import { EnqueueSnackbar } from "$hooks";
import { OptionsObject } from "notistack";
import { formErrorHandlers } from "./formErrorHandlers";

export interface IFiubaAuthenticationErrorHandler {
  enqueueSnackbar: EnqueueSnackbar;
}

export const FiubaAuthenticationErrorHandler = ({
  enqueueSnackbar
}: IFiubaAuthenticationErrorHandler) => {
  const message = "Error en el servicio de autenticación de FIUBA";
  const options: OptionsObject = { variant: "error" };
  return formErrorHandlers({ enqueueSnackbar })({
    FiubaUsersServiceFetchError: () => enqueueSnackbar(message, options),
    AuthenticateFaultError: () => enqueueSnackbar(message, options),
    AuthenticateUnknownError: () => enqueueSnackbar(message, options)
  });
};
