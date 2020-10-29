import React, { FunctionComponent } from "react";
import { TextInput, ITextInputProps } from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";

export const Field: FunctionComponent<IFieldProps> = ({ mandatory, ...props }) => (
  <TextInput {...props} mandatory validate={FormikValidator({ mandatory })} />
);

interface IFieldProps extends ITextInputProps {
  mandatory?: boolean;
}
