import React, { FunctionComponent } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { Button, ButtonKind, ButtonType } from "$components/Button";
import styles from "./styles.module.scss";

export const FormConfirmDialog: FunctionComponent<IConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  translations,
  confirmButtonKind = "primary",
  confirmButtonType,
  formName,
  children
}) => {
  const onConfirmClick = () => {
    onConfirm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        <span className={styles.title}>{translations?.confirmDialogTitle}</span>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{translations?.confirmDialogDescription}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} kind="secondary">
          {translations?.confirmDialogCancel}
        </Button>
        <Button
          form={formName}
          {...(confirmButtonType === undefined && { onClick: onConfirmClick })}
          kind={confirmButtonKind}
          type={confirmButtonType}
        >
          {translations?.confirmDialogConfirm}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export interface IConfirmDialogTranslations {
  confirmDialogTitle: string;
  confirmDialogDescription: string;
  confirmDialogCancel: string;
  confirmDialogConfirm: string;
}

interface IConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  translations?: IConfirmDialogTranslations;
  confirmButtonKind?: ButtonKind;
  confirmButtonType?: ButtonType;
  formName?: string;
}
