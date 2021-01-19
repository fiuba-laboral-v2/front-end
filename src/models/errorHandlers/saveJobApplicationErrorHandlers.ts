import { ShowError } from "$hooks";
import { formErrorHandlers } from "./formErrorHandlers";

export const saveJobApplicationErrorHandlers = (showError: ShowError) =>
  formErrorHandlers(showError)({
    JobApplicationAlreadyExistsError: () => showError({ message: "Ya te postulaste" })
  });
