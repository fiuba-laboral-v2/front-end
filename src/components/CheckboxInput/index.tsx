import React, { FunctionComponent } from "react";
import { Field, FieldProps } from "formik";
import { FieldAttributes } from "formik/dist/Field";
import { Checkbox } from "formik-material-ui";
import styles from "./styles.module.scss";
import CheckboxIcon from "@material-ui/icons/CheckBox";

export const CheckboxInput: FunctionComponent<FieldAttributes<any>> = props => {
  const children = (fieldProps: FieldProps<boolean>) => (
    <Checkbox
      type="checkbox"
      {...fieldProps}
      size="small"
      color="default"
      checkedIcon={<CheckboxIcon fontSize="small" className={styles.color} />}
    />
  );

  return <Field className={styles.color} type="checkbox" children={children} {...props} />;
};
