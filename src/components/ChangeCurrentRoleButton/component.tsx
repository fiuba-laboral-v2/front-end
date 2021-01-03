import React, { FunctionComponent } from "react";
import { Button } from "$components/Button";
import { IComponentProps } from "./interfaces";

export const ChangeCurrentRoleButton: FunctionComponent<IComponentProps> = ({
  className,
  onClick,
  label
}) => (
  <Button kind="secondary" onClick={onClick} className={className}>
    {label}
  </Button>
);
