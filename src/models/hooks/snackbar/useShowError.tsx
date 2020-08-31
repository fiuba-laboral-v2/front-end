import React from "react";
import { useSnackbar } from "notistack";
import { Button } from "$components/Button";
import { Window } from "$models/Window";

const reloadAction = <Button kind="danger" onClick={Window.reload}>Recargar</Button>;

export const useShowError = () => {
  const { enqueueSnackbar } = useSnackbar();
  return ({ message, reloadPrompt }: IShowError) => {
    return enqueueSnackbar(
      message || "Hubo un error",
      {
        action: reloadPrompt ? reloadAction : undefined,
        variant: "error"
      }
    );
  };
};

interface IShowError {
  message?: string;
  reloadPrompt?: boolean;
}
