import React, { FunctionComponent } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { Button } from "$components/Button";
import styles from "./styles.module.scss";

export const FormConfirmDialog: FunctionComponent<IConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  translations
}) => (
  <Dialog open={isOpen} onClose={onClose}>
    <DialogTitle>
      <span className={styles.title}>{translations.confirmDialogTitle}</span>
    </DialogTitle>
    <DialogContent>
      <DialogContentText>{translations.confirmDialogDescription}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} kind="secondary">
        {translations.confirmDialogCancel}
      </Button>
      <Button
        onClick={() => {
          onConfirm();
          onClose();
        }}
        kind="primary"
      >
        {translations.confirmDialogConfirm}
      </Button>
    </DialogActions>
  </Dialog>
);

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
  translations: IConfirmDialogTranslations;
}
