import React from "react";
import { useHistory } from "react-router-dom";
import Button from "$components/Button";
import { History } from "history";
import {
  useSnackbar,
  OptionsObject,
  SnackbarMessage,
  SnackbarKey
} from "notistack";

const reloadAction = (history: History) => (
  <Button
    className="danger"
    onClick={() => history.goBack()}
  >
    Recargar
  </Button>
);

const showError = ({ enqueueSnackbar, history, message, reloadPrompt, ...options }: IShowError) => {
  const msg = reloadPrompt ? "Hubo un error" : message;
  const action = reloadPrompt ? reloadAction(history) : undefined;
  return enqueueSnackbar(msg, { ...options, action });
};

export const useShowError = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  return (options: IUseShowError) => showError({ ...options, history, enqueueSnackbar });
};

interface IShowError extends IUseShowError {
  history: History;
  enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey;
}

interface IUseShowError extends OptionsObject {
  message?: string;
  reloadPrompt?: boolean;
}
