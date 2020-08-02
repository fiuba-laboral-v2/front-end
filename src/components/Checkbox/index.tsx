import React, { FunctionComponent } from "react";
import { Checkbox as MaterialCheckbox, CheckboxProps } from "@material-ui/core";
import CheckboxIcon from "@material-ui/icons/CheckBox";

export const Checkbox: FunctionComponent<CheckboxProps & { checkboxClassName: string }> = (
  {
    className,
    onClick,
    checked,
    checkboxClassName
  }
) => (
  <MaterialCheckbox
    disabled
    size="small"
    onClick={onClick}
    checked={checked}
    className={className}
    checkedIcon={<CheckboxIcon fontSize="small" className={checkboxClassName}/>}
  />
);
