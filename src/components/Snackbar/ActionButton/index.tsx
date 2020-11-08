import React, { FunctionComponent } from "react";
import { Button, IButtonProps } from "$components/Button";
import styles from "./styles.module.scss";

export const ActionButton: FunctionComponent<IActionButtonProps> = ({ onClick, children }) => (
  <Button kind="danger" className={styles.reloadButton} onClick={onClick}>
    {children}
  </Button>
);

type IActionButtonProps = Pick<IButtonProps, "onClick" | "children">;
