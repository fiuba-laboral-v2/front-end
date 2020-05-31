import { OptionsObject, SnackbarKey, SnackbarMessage } from "notistack";
import { ErrorHandlers } from "../handleError";
import { handleValidationError } from "./handleValidationError";
import { handleGenericError } from "./handleGenericError";

export interface IFormErrorHandlers {
  enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey;
}

export const formErrorHandlers = ({ enqueueSnackbar }: IFormErrorHandlers) =>
  (handlers?: ErrorHandlers) => ({
    ValidationError: handleValidationError({ enqueueSnackbar }),
    defaultHandler: handleGenericError({ enqueueSnackbar }),
    ...handlers
  });
