import React, { FunctionComponent } from "react";
import { Checkbox as MaterialCheckbox, CheckboxProps } from "@material-ui/core";

export const Checkbox: FunctionComponent<CheckboxProps> = (
  {
    className,
    onClick,
    checked
  }
) => (
  <MaterialCheckbox
    size="small"
    onClick={onClick}
    checked={checked}
    className={className}
  />
);
