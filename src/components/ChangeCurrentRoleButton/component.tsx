import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Button } from "$components/Button";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const ChangeCurrentRoleButton: FunctionComponent<IComponentProps> = ({
  className,
  onClick,
  label
}) => (
  <Button kind="secondary" onClick={onClick} className={classNames(className, styles.button)}>
    {label}
  </Button>
);
