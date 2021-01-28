import React from "react";
import {
  OptionsObject,
  SnackbarKey,
  SnackbarMessage,
  useSnackbar as originalUseSnackbar
} from "notistack";
import { CloseButton } from "$components/Snackbar/CloseButton";

export const useSnackbar = () => {
  const { enqueueSnackbar, closeSnackbar } = originalUseSnackbar();
  return {
    closeSnackbar,
    enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => {
      const key = enqueueSnackbar(message, {
        anchorOrigin: { horizontal: "right", vertical: "top" },
        ...options,
        action: (
          <>
            {options?.action}
            <CloseButton onClick={() => closeSnackbar(key)} />
          </>
        )
      });
      return key;
    }
  };
};

export type EnqueueSnackbar = (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey;
