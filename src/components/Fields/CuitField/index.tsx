import React, { FunctionComponent } from "react";
import { TextInput, ITextInputProps } from "$components/TextInput";
import { validateCuit } from "validations-fiuba-laboral-v2";

export const CuitField: FunctionComponent<ITextInputProps> = props => (
  <TextInput {...props} validator={validateCuit} mandatory />
);
