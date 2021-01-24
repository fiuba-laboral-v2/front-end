import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const MessageBox: FunctionComponent<IComponentProps> = ({ message }) => (
  <span className={styles.messageContainer}>{message}</span>
);

interface IComponentProps {
  message: string;
}
