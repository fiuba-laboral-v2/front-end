import { ErrorHandlers } from "../handleError";
import { ShowError } from "$hooks";
import { handleValidationError } from "./handleValidationError";
import { handleGenericError } from "./handleGenericError";

export const createOrEditOfferErrorHandlers = (showError: ShowError) => (
  handlers?: ErrorHandlers
) => ({
  ValidationError: handleValidationError(showError),
  defaultHandler: handleGenericError(showError),
  CompanyWithNoInternshipAgreementError: () =>
    showError({ message: "Necesitas un convenio de pasantía para poder publicar pasantías" }),
  ...handlers
});
