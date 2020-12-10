import React, { FunctionComponent } from "react";
import { Button, IButtonProps } from "$components/Button";
import styles from "./styles.module.scss";

export const ActionButton: FunctionComponent<IActionButtonProps> = ({
  onClick,
  kind,
  children
}) => (
  <Button kind={kind} className={styles.reloadButton} onClick={onClick}>
    {children}
  </Button>
);

type IActionButtonProps = Pick<IButtonProps, "onClick" | "children" | "kind">;
