import {
  ISaveCompanyErrorHandlers,
  ISaveCompanyErrorHandlersErrors,
  saveCompanyErrorHandlers
} from "./saveCompanyErrorHandlers";
import { handleValidationError } from "./handleValidationError";

interface ICreateCompanyErrorHandlers extends ISaveCompanyErrorHandlersErrors {
  user: { email: string; };
}

export const createCompanyErrorHandlers = (
  {
    setErrors,
    enqueueSnackbar
  }: ISaveCompanyErrorHandlers<ICreateCompanyErrorHandlers>
) =>
  ({
    UserEmailAlreadyExistsError: handleValidationError(
      { enqueueSnackbar },
      () => setErrors({ user: { email: "Este email ya existe" } })
    ),
    ...saveCompanyErrorHandlers({ setErrors, enqueueSnackbar })
  });
