import { useSnackbar } from "./useSnackbar";

export const useShowError = () => {
  const snackbar = useSnackbar();
  return ({ message, reloadPrompt }: IShowError) => snackbar({
    message: message ? message : "Hubo un error",
    reloadPrompt,
    variant: "error"
  });
};

interface IShowError {
  message?: string;
  reloadPrompt?: boolean;
}
