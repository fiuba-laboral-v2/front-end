import { EnqueueSnackbar } from "$hooks";
import { formErrorHandlers } from "./formErrorHandlers";

export interface ISaveJobApplicationErrorHandlers {
  enqueueSnackbar: EnqueueSnackbar;
}

export const saveJobApplicationErrorHandlers = ({
  enqueueSnackbar
}: ISaveJobApplicationErrorHandlers) =>
  formErrorHandlers({ enqueueSnackbar })({
    JobApplicationAlreadyExistsError: () =>
      enqueueSnackbar("Ya te postulaste", { variant: "error" })
  });
