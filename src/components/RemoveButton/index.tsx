import React, { FunctionComponent, MouseEventHandler } from "react";
import styles from "./styles.module.scss";

export const RemoveButton: FunctionComponent<IRemoveButtonProps> = ({ onClick }) => (
  <span className={styles.remove} onClick={onClick}>✕</span>
);

interface IRemoveButtonProps {
  onClick?: MouseEventHandler<HTMLSpanElement>;
}
