import React, { FunctionComponent } from "react";
import { CircularProgress } from "@material-ui/core";
import styles from "./styles.module.scss";

const LoadingSpinner: FunctionComponent = () => (
  <div className={styles.spinner}>
    <CircularProgress color="primary" />
  </div>
);

export { LoadingSpinner };
