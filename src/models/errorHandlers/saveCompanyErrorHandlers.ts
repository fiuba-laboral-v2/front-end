import { FormikErrors } from "formik";
import { OptionsObject, SnackbarKey, SnackbarMessage } from "notistack";
import { formErrorHandlers } from "./formErrorHandlers";
import { handleValidationError } from "./handleValidationError";

export interface ISaveCompanyErrorHandlersErrors {
  cuit: string;
  _form: string;
}

export interface ISaveCompanyErrorHandlers<T> {
  setErrors: (error: FormikErrors<T>) => void;
  enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey;
}

export const saveCompanyErrorHandlers = ({
  setErrors,
  enqueueSnackbar
}: ISaveCompanyErrorHandlers<ISaveCompanyErrorHandlersErrors>) =>
  formErrorHandlers({ enqueueSnackbar })({
    CompanyCuitAlreadyExistsError: handleValidationError({ enqueueSnackbar }, () =>
      setErrors({ cuit: "Este cuit ya existe" })
    )
  });
