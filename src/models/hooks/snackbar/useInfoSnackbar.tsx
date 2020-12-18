import React from "react";
import { useSnackbar } from "$hooks/snackbar/useSnackbar";
import { ActionButton } from "$components/Snackbar/ActionButton";

export const useInfoSnackbar = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  return ({ message, action, actionMessage, skip, persist, preventDuplicate }: IShowInfo) => {
    if (skip) return;

    return enqueueSnackbar(message || "", {
      action: (
        <ActionButton
          kind="secondary"
          onClick={() => {
            action();
            closeSnackbar();
          }}
        >
          {actionMessage}
        </ActionButton>
      ),
      variant: "info",
      persist,
      preventDuplicate
    });
  };
};

interface IShowInfo {
  message?: string;
  action: () => void;
  actionMessage: string;
  skip: boolean;
  persist?: boolean;
  preventDuplicate?: boolean;
}
