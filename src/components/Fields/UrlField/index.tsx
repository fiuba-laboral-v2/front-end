import React, { FunctionComponent } from "react";
import { TextInput, ITextInputProps } from "$components/TextInput";
import { validateURL } from "validations-fiuba-laboral-v2";

export const UrlField: FunctionComponent<ITextInputProps> = props => (
  <TextInput {...props} validator={validateURL} mandatory />
);
