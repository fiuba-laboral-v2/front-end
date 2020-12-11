import React, { FunctionComponent } from "react";
import { DialogTitle as MaterialUIDialogTitle } from "@material-ui/core";
import styles from "./styles.module.scss";

export const DialogTitle: FunctionComponent = ({ children }) => (
  <MaterialUIDialogTitle>
    <span className={styles.title}>{children}</span>
  </MaterialUIDialogTitle>
);
