import { FormikErrors } from "formik";
import { ShowError } from "$hooks";
import { formErrorHandlers } from "./formErrorHandlers";
import { handleValidationError } from "./handleValidationError";

export interface ISaveCompanyErrorHandlersErrors {
  cuit: string;
  _form: string;
}

export interface ISaveCompanyErrorHandlers<T> {
  setErrors: (error: FormikErrors<T>) => void;
  showError: ShowError;
}

export const saveCompanyErrorHandlers = ({
  setErrors,
  showError
}: ISaveCompanyErrorHandlers<ISaveCompanyErrorHandlersErrors>) =>
  formErrorHandlers(showError)({
    CompanyCuitAlreadyExistsError: handleValidationError(showError, () =>
      setErrors({ cuit: "Este cuit ya existe" })
    ),
    BusinessNameAlreadyExistsError: handleValidationError(showError, () =>
      setErrors({ cuit: "Esta razón social ya existe" })
    )
  });
