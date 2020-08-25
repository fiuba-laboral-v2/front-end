import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import Button from "../Button";
import styles from "./styles.module.scss";

export const ConfirmDialog = ({ open, onClose }: IConfirmDialogProps) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>
      <span className={styles.title}>¿Editar oferta aprobada?</span>
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
        La oferta tendrá que ser nuevamente aprobada para volver a ser visible
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={onClose}
        type="submit"
        className="primary"
      >
        Confirmar
      </Button>
    </DialogActions>
  </Dialog>
);

interface IConfirmDialogProps {
  open: boolean;
  onClose: () => void;
}
