import React from "react";
import { useSnackbar } from "$hooks/snackbar/useSnackbar";
import { Window } from "$models/Window";
import { ActionButton } from "$components/Snackbar/ActionButton";

const reloadAction = (
  <ActionButton kind="danger" onClick={Window.reload}>
    Recargar
  </ActionButton>
);

export const useShowError = (): ShowError => {
  const { enqueueSnackbar } = useSnackbar();
  return ({ message, reloadPrompt }: IShowErrorArguments) => {
    return enqueueSnackbar(message || "Hubo un error", {
      action: reloadPrompt ? reloadAction : undefined,
      variant: "error"
    });
  };
};

type ShowError = ({ message, reloadPrompt }: IShowErrorArguments) => React.ReactText;

interface IShowErrorArguments {
  message?: string;
  reloadPrompt?: boolean;
}
