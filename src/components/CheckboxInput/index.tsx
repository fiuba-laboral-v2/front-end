import React, { FunctionComponent } from "react";
import { Field, FieldProps } from "formik";
import { Checkbox } from "formik-material-ui";
import styles from "./styles.module.scss";
import CheckboxIcon from "@material-ui/icons/CheckBox";
import classNames from "classnames";
import { FormControlLabel } from "@material-ui/core";

export const CheckboxInput: FunctionComponent<ICheckboxInputProps> = props => (
  <div className={classNames(styles.input, props.className)}>
    <FormControlLabel
      className={styles.formControlLabel}
      label={props.label}
      labelPlacement={props.labelPosition}
      control={
        <Field className={styles.color} type="checkbox" {...props}>
          {(fieldProps: FieldProps<boolean>) => (
            <Checkbox
              type="checkbox"
              size="small"
              color="default"
              checkedIcon={<CheckboxIcon fontSize="small" className={styles.color} />}
              {...fieldProps}
            />
          )}
        </Field>
      }
    />
  </div>
);

interface ICheckboxInputProps {
  label: string;
  labelPosition: "end" | "start" | "top" | "bottom";
  checked: boolean;
  name: string;
  className?: string;
}
