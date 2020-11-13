import React, { FunctionComponent } from "react";
import { CircularProgress } from "@material-ui/core";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const LoadingSpinner: FunctionComponent<ILoadingSpinnerProps> = ({ className }) => (
  <div className={classNames(className, styles.spinner)}>
    <CircularProgress color="primary" />
  </div>
);

interface ILoadingSpinnerProps {
  className?: string;
}
