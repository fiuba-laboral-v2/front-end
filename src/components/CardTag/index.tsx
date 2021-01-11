import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const CardTag: FunctionComponent<IComponentProps> = ({ color, label }) => (
  <div className={classNames(styles.tag, styles[color])}>{label}</div>
);

interface IComponentProps {
  label: string;
  color: "green" | "blue";
}
