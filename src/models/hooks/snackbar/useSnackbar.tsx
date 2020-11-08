import React from "react";
import { OptionsObject, SnackbarMessage, useSnackbar as originalUseSnackbar } from "notistack";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./styles.module.scss";

export const useSnackbar = () => {
  const { enqueueSnackbar, closeSnackbar } = originalUseSnackbar();
  return {
    enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => {
      const key = enqueueSnackbar(message, {
        ...options,
        action: (
          <>
            {options?.action}
            <IconButton disableRipple size="small" onClick={() => closeSnackbar(key)}>
              <CloseIcon fontSize="small" className={styles.closeIcon} />
            </IconButton>
          </>
        )
      });
      return key;
    }
  };
};
