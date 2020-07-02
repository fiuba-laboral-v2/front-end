import { useSnackBar } from "./useSnackBar";

export const useShowError = () => {
  const snackBar = useSnackBar();
  return ({ message, reloadPrompt }: IShowError) => snackBar({
    message: message ? message : "Hubo un error",
    reloadPrompt,
    variant: "error"
  });
};

interface IShowError {
  message?: string;
  reloadPrompt?: boolean;
}
