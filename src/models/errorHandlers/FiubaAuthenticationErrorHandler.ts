import { EnqueueSnackbar, ShowError } from "$hooks";
import { formErrorHandlers } from "./formErrorHandlers";

export interface IFiubaAuthenticationErrorHandler {
  enqueueSnackbar: EnqueueSnackbar;
}

export const FiubaAuthenticationErrorHandler = (showError: ShowError) => {
  const message = "Error en el servicio de autenticación de FIUBA";
  return formErrorHandlers(showError)({
    FiubaUsersServiceFetchError: () => showError({ message }),
    AuthenticateFaultError: () => showError({ message }),
    AuthenticateUnknownError: () => showError({ message })
  });
};
