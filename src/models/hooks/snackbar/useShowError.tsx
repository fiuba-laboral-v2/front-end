import React from "react";
import { useSnackbar } from "$hooks/snackbar/useSnackbar";
import { Window } from "$models/Window";
import { ActionButton } from "$components/Snackbar/ActionButton";

const reloadAction = <ActionButton onClick={Window.reload}>Recargar</ActionButton>;

export const useShowError = () => {
  const { enqueueSnackbar } = useSnackbar();
  return ({ message, reloadPrompt }: IShowError) => {
    return enqueueSnackbar(message || "Hubo un error", {
      action: reloadPrompt ? reloadAction : undefined,
      variant: "error"
    });
  };
};

interface IShowError {
  message?: string;
  reloadPrompt?: boolean;
}
