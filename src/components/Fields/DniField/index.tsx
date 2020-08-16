import React, { FunctionComponent } from "react";
import { TextInput, ITextInputProps } from "$components/TextInput";

export const DniField: FunctionComponent<ITextInputProps> = ({ name, label }) => (
  <TextInput
    name={name}
    label={label}
  />
);
