import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Title: FunctionComponent<ITitleProps> = ({ className, children }) => (
  <h2 className={classNames(styles.title, className)}>{children}</h2>
);

interface ITitleProps {
  className?: string;
}
