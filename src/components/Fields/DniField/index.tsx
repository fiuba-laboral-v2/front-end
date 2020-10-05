import React, { FunctionComponent } from "react";
import { TextInput, ITextInputProps } from "$components/TextInput";

export const DniField: FunctionComponent<ITextInputProps> = props => (
  <TextInput
    {...props}
    autoComplete="username"
  />
);
