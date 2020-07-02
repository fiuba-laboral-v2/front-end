import { useSnackBar } from "./useSnackBar";

export const useShowSuccess = () => {
  const snackBar = useSnackBar();
  return (options: IShowError) => snackBar({ ...options, variant: "success" });
};

interface IShowError {
  message: string;
}
