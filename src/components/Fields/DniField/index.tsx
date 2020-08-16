import React, { FunctionComponent } from "react";
import { TextInput } from "$components/TextInput";
import { FieldAttributes } from "formik/dist/Field";

export const DniField: FunctionComponent<FieldAttributes<any>> = ({ name, label }) => (
  <TextInput
    name={name}
    label={label}
  />
);
