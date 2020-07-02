import React from "react";
import Button from "$components/Button";
import {
  useSnackbar,
  OptionsObject,
  SnackbarMessage,
  SnackbarKey,
  VariantType
} from "notistack";

const reloadAction = () => (
  <Button
    className="danger"
    onClick={() => window.location.href = window.location.pathname + window.location.search}
  >
    Recargar
  </Button>
);

const getMessage = (message?: string, variant?: VariantType) => {
  if (message) return message;
  if (variant === "error") return "Hubo un error";
  return message;
};

const snackBar = ({ enqueueSnackbar, message, reloadPrompt, ...options }: IShowError) => {
  const action = reloadPrompt ? reloadAction() : undefined;
  return enqueueSnackbar(getMessage(message, options.variant), { ...options, action });
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
