import { useSnackbar } from "./useSnackbar";

export const useShowSuccess = () => {
  const snackbar = useSnackbar();
  return (options: IShowSuccess) => snackbar({ ...options, variant: "success" });
};

interface IShowSuccess {
  message: string;
}
