import React, { FunctionComponent } from "react";
import { Checkbox as MaterialCheckbox, CheckboxProps } from "@material-ui/core";
import CheckboxIcon from "@material-ui/icons/CheckBox";
import styles from "./styles.module.scss";

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
    checkedIcon={<CheckboxIcon fontSize="small" className={styles.checkedIcon}/>}
  />
);
