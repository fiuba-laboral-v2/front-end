import { useSnackbar } from "./useSnackbar";

export const useShowSuccess = () => {
  const snackbar = useSnackbar();
  return (options: IShowError) => snackbar({ ...options, variant: "success" });
};

interface IShowError {
  message: string;
}
