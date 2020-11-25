import React, { FunctionComponent } from "react";
import { Button } from "$components/Button";
import { IComponent } from "./interfaces";
import styles from "./styles.module.scss";

export const StatusButton: FunctionComponent<IComponent> = ({
  kind,
  setStatus,
  disabled,
  Icon,
  status,
  label,
  hidden
}) => (
  <Button {...{ kind, disabled, hidden }} onClick={() => setStatus(status)}>
    <div className={styles.container}>
      <Icon className={styles.icon} fontSize="small" />
      <span className={styles.label}>{label}</span>
    </div>
  </Button>
);
