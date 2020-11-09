import { useSnackbar } from "$hooks/snackbar/useSnackbar";

export const useShowSuccess = () => {
  const { enqueueSnackbar } = useSnackbar();
  return ({ message }: IShowSuccess) => enqueueSnackbar(message, { variant: "success" });
};

interface IShowSuccess {
  message: string;
}
