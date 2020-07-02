import React from "react";
import { useHistory } from "react-router-dom";
import Button from "$components/Button";
import { History } from "history";
import {
  useSnackbar,
  OptionsObject,
  SnackbarMessage,
  SnackbarKey,
  VariantType
} from "notistack";

const reloadAction = (history: History) => (
  <Button
    className="danger"
    onClick={() => history.goBack()}
  >
    Recargar
  </Button>
);

const getMessage = (message?: string, variant?: VariantType) => {
  if (message) return message;
  if (variant === "error") return "Hubo un error";
  return message;
};

const showError = ({ enqueueSnackbar, history, message, reloadPrompt, ...options }: IShowError) => {
  const action = reloadPrompt ? reloadAction(history) : undefined;
  return enqueueSnackbar(getMessage(message, options.variant), { ...options, action });
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
