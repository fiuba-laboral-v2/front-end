import React from "react";
import { useSnackbar } from "$hooks/snackbar/useSnackbar";
import { ActionButton } from "$components/Snackbar/ActionButton";

export const useShowInfo = () => {
  const { enqueueSnackbar } = useSnackbar();
  return ({ message, action, actionMessage, skip }: IShowError) => {
    if (skip) return;

    return enqueueSnackbar(message || "", {
      action: <ActionButton onClick={action}>{actionMessage}</ActionButton>,
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
