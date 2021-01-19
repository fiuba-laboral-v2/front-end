import { ErrorHandlers } from "../handleError";
import { ShowError } from "$hooks";
import { handleValidationError } from "./handleValidationError";
import { handleGenericError } from "./handleGenericError";

export const formErrorHandlers = (showError: ShowError) => (handlers?: ErrorHandlers) => ({
  ValidationError: handleValidationError(showError),
  defaultHandler: handleGenericError(showError),
  ...handlers
});
