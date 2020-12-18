import { ErrorHandlers } from "../handleError";
import { EnqueueSnackbar } from "$hooks";
import { handleValidationError } from "./handleValidationError";
import { handleGenericError } from "./handleGenericError";

export interface IFormErrorHandlers {
  enqueueSnackbar: EnqueueSnackbar;
}

export const formErrorHandlers = ({ enqueueSnackbar }: IFormErrorHandlers) => (
  handlers?: ErrorHandlers
) => ({
  ValidationError: handleValidationError({ enqueueSnackbar }),
  defaultHandler: handleGenericError({ enqueueSnackbar }),
  ...handlers
});
