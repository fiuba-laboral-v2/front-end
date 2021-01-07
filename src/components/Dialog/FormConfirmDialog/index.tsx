import React, { FunctionComponent } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText } from "@material-ui/core";
import { Button, ButtonKind, ButtonType } from "$components/Button";
import { DialogTitle } from "../DialogTitle";
import { dialogStyles } from "./styles";

export const FormConfirmDialog: FunctionComponent<IConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  closeOnConfirm = true,
  translations,
  confirmButtonKind = "primary",
  confirmButtonType,
  formName,
  hideConfirmButton,
  children
}) => {
  const onConfirmClick = () => {
    if (onConfirm) onConfirm();
    if (closeOnConfirm) onClose();
  };

  return (
    <Dialog classes={dialogStyles()} open={isOpen} onClose={onClose}>
      <DialogTitle>{translations?.confirmDialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>{translations?.confirmDialogDescription}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} kind="secondary">
          {translations?.confirmDialogCancel}
        </Button>
        {!hideConfirmButton && (
          <Button
            form={formName}
            onClick={onConfirmClick}
            kind={confirmButtonKind}
            type={confirmButtonType}
          >
            {translations?.confirmDialogConfirm}
          </Button>
        )}
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
  onConfirm?: () => void;
  closeOnConfirm?: boolean;
  translations?: IConfirmDialogTranslations;
  confirmButtonKind?: ButtonKind;
  confirmButtonType?: ButtonType;
  formName?: string;
  hideConfirmButton?: boolean;
}
