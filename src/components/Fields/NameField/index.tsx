import React, { FunctionComponent } from "react";
import { TextInput, ITextInputProps } from "$components/TextInput";
import { validateName } from "validations-fiuba-laboral-v2";

export const NameField: FunctionComponent<ITextInputProps> = ({ mandatory, ...props }) => (
  <TextInput {...props} mandatory={mandatory} validator={validateName} />
);
