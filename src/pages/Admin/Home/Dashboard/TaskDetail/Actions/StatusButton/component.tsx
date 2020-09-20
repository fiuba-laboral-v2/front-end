import React, { FunctionComponent } from "react";
import { Button } from "$components/Button";
import { IComponent } from "./interfaces";
import styles from "./styles.module.scss";

export const StatusButton: FunctionComponent<IComponent> = (
  {
    kind,
    setStatus,
    Icon,
    status,
    label,
    disabled
  }
) => (
  <Button kind={kind} onClick={() => setStatus(status)} disabled={disabled}>
    <div className={styles.container}>
      <Icon className={styles.icon} fontSize="small"/>
      <span className={styles.label}>{label}</span>
    </div>
  </Button>
);
