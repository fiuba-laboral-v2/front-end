import React from "react";
import { OptionsObject, SnackbarMessage, useSnackbar as originalUseSnackbar } from "notistack";
import { CloseButton } from "$components/Snackbar/CloseButton";

export const useSnackbar = () => {
  const { enqueueSnackbar, closeSnackbar } = originalUseSnackbar();
  return {
    enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => {
      const key = enqueueSnackbar(message, {
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
