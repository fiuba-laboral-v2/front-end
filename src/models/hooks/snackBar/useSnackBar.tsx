import React from "react";
import Button from "$components/Button";
import { reload } from "$models/reload";
import {
  useSnackbar,
  OptionsObject,
  SnackbarMessage,
  SnackbarKey
} from "notistack";

const reloadAction = () => (
  <Button
    className="danger"
    onClick={reload}
  >
    Recargar
  </Button>
);

const snackBar = ({ enqueueSnackbar, message, reloadPrompt, ...options }: IShowError) => {
  const action = reloadPrompt ? reloadAction() : undefined;
  return enqueueSnackbar(message, { ...options, action });
};

export const useSnackBar = () => {
  const { enqueueSnackbar } = useSnackbar();
  return (options: IUseShowError) => snackBar({ ...options, enqueueSnackbar });
};

interface IShowError extends IUseShowError {
  enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey;
}

interface IUseShowError extends OptionsObject {
  message?: string;
  reloadPrompt?: boolean;
}
