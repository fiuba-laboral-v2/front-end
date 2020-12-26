import React, { FunctionComponent } from "react";
import { LoadingSpinner as BaseLoadingSpinner } from "$components/LoadingSpinner";
import styles from "./styles.module.scss";

export const LoadingSpinner: FunctionComponent = () => (
  <BaseLoadingSpinner className={styles.spinner} />
);
