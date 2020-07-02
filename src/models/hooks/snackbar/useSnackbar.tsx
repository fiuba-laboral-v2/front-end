import React from "react";
import Button from "$components/Button";
import { Window } from "$models/Window";
import {
  useSnackbar as useNotistackSnackbar,
  OptionsObject,
  SnackbarMessage,
  SnackbarKey
} from "notistack";

const reloadAction = <Button className="danger" onClick={Window.reload}>Recargar</Button>;

const snackbar = ({ enqueueSnackbar, message, reloadPrompt, ...options }: IShowError) => {
  const action = reloadPrompt ? reloadAction : undefined;
  return enqueueSnackbar(message, { ...options, action });
};

export const useSnackbar = () => {
  const { enqueueSnackbar } = useNotistackSnackbar();
  return (options: IUseShowError) => snackbar({ ...options, enqueueSnackbar });
};

interface IShowError extends IUseShowError {
  enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey;
}

interface IUseShowError extends OptionsObject {
  message?: string;
  reloadPrompt?: boolean;
}
