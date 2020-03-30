import React, { FunctionComponent, MouseEventHandler } from "react";
import styles from "./styles.module.scss";

export const AddButton: FunctionComponent<IAddButtonProps> = ({ onClick }) => (
  <span className={styles.plusSign} onClick={onClick}>+</span>
);

interface IAddButtonProps {
  onClick?: MouseEventHandler<HTMLSpanElement>;
}
