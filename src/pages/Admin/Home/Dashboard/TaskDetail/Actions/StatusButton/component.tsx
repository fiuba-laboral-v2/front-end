import React, { FunctionComponent } from "react";
import { Button } from "$components/Button";
import { IComponent } from "./interfaces";
import styles from "./styles.module.scss";

export const StatusButton: FunctionComponent<IComponent> = (
  {
    className,
    setStatus,
    Icon,
    status,
    label
  }
) => (
  <Button className={className} onClick={() => setStatus(status)} >
    <Icon className={styles.icon} fontSize="small"/>
    {label}
  </Button>
);
