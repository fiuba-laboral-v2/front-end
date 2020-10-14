import React, { FunctionComponent, MouseEventHandler } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const RemoveButton: FunctionComponent<IRemoveButtonProps> = ({ onClick, className }) => (
  <span className={classNames(styles.remove, className)} onClick={onClick}>
    ✕
  </span>
);

interface IRemoveButtonProps {
  onClick?: MouseEventHandler<HTMLSpanElement>;
  className?: string;
}
