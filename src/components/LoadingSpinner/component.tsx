import React, { FunctionComponent } from "react";
import { CircularProgress, CircularProgressProps } from "@material-ui/core";
import styles from "./styles.module.scss";

const LoadingSpinner: FunctionComponent<CircularProgressProps> = (
  {
    color
  }) => (
  <div className={styles.spinner}><CircularProgress color={color}/></div>
);

export { LoadingSpinner };
