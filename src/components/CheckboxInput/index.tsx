import React, { FunctionComponent } from "react";
import { Field } from "formik";
import { FieldAttributes } from "formik/dist/Field";
import { Checkbox } from "formik-material-ui";

export const CheckboxInput: FunctionComponent<FieldAttributes<any>> = props =>
  <Field
    type="checkbox"
    size="small"
    component={Checkbox}
    {...props}
  />;
