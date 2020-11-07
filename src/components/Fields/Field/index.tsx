import React, { FunctionComponent } from "react";
import { TextInput, ITextInputProps } from "$components/TextInput";

export const Field: FunctionComponent<IFieldProps> = ({ mandatory, ...props }) => (
  <TextInput {...props} mandatory={mandatory} />
);

interface IFieldProps extends ITextInputProps {
  mandatory?: boolean;
}
