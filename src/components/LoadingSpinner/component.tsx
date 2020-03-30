import React, { FunctionComponent } from "react";
import { CircularProgress, CircularProgressProps } from "@material-ui/core";
import styles from "./styles.module.scss";

const LoadingSpinner: FunctionComponent<CircularProgressProps> = (
  {
    ...props
  }) => (
  <div className={styles.spinner}><CircularProgress color={props.color}/></div>
);

export { LoadingSpinner };
