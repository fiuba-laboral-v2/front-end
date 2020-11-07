import React, { FunctionComponent } from "react";
import { TextInput, ITextInputProps } from "$components/TextInput";
import { validateIntegerInRange } from "validations-fiuba-laboral-v2";

const validate = validateIntegerInRange({ min: { value: 0, include: false } });

export const DniField: FunctionComponent<ITextInputProps> = props => (
  <TextInput
    {...props}
    autoComplete="username"
    validator={value => validate(Number.parseInt(value, 10))}
  />
);
