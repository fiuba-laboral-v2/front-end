import React from "react";
import { useSnackbar } from "$hooks/snackbar/useSnackbar";
import { ActionButton } from "$components/Snackbar/ActionButton";

export const useInfoSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();
  return ({ message, action, actionMessage, skip }: IShowError) => {
    if (skip) return;

    return enqueueSnackbar(message || "", {
      action: (
        <ActionButton kind="secondary" onClick={action}>
          {actionMessage}
        </ActionButton>
      ),
      variant: "info"
    });
  };
};

interface IShowError {
  message?: string;
  action: () => void;
  actionMessage: string;
  skip: boolean;
}
