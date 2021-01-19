import {
  ISaveCompanyErrorHandlers,
  ISaveCompanyErrorHandlersErrors,
  saveCompanyErrorHandlers
} from "./saveCompanyErrorHandlers";
import { handleValidationError } from "./handleValidationError";

interface ICreateCompanyErrorHandlers extends ISaveCompanyErrorHandlersErrors {
  user: { email: string };
}

export const createCompanyErrorHandlers = ({
  setErrors,
  showError
}: ISaveCompanyErrorHandlers<ICreateCompanyErrorHandlers>) => ({
  UserEmailAlreadyExistsError: handleValidationError(showError, () =>
    setErrors({ user: { email: "Este email ya existe" } })
  ),
  ...saveCompanyErrorHandlers({ setErrors, showError })
});
