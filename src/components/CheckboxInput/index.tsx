import React, { FunctionComponent } from "react";
import { Field, FieldProps } from "formik";
import { Checkbox } from "formik-material-ui";
import styles from "./styles.module.scss";
import CheckboxIcon from "@material-ui/icons/CheckBox";
import classNames from "classnames";

export const CheckboxInput: FunctionComponent<ICheckboxInputProps> = props => {
  const children = (fieldProps: FieldProps<boolean>) => (
    <Checkbox
      type="checkbox"
      {...fieldProps}
      size="small"
      color="default"
      checkedIcon={<CheckboxIcon fontSize="small" className={styles.color} />}
    />
  );

  return (
    <div className={classNames(styles.input, props.className)}>
      <p className={styles.label}>{props.label}</p>
      <Field className={styles.color} type="checkbox" children={children} {...props} />
    </div>
  );
};

interface ICheckboxInputProps {
  label: string;
  checked?: boolean;
  name: string;
  className?: string;
}
