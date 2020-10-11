import React, { FunctionComponent } from "react";
import { TextInput } from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";

export const Field: FunctionComponent<IFieldProps> = ({ mandatory, ...props }) => (
  <TextInput
    {...props}
    validate={FormikValidator({ mandatory })}
  />
);

interface IFieldProps {
  mandatory?: boolean;
}
