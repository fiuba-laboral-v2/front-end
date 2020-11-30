import React, { FunctionComponent } from "react";
import { TextField } from "$components/Fields";
import { validateIntegerInRange } from "validations-fiuba-laboral-v2";
import { ITextFieldProps } from "../TextField";

const validate = validateIntegerInRange({ min: { value: 0, include: false } });

export const DniField: FunctionComponent<ITextFieldProps> = props => {
  debugger;
  return (
    <TextField
      {...props}
      autoComplete="username"
      validator={value => validate(Number(value.replace(",", ".")))}
    />
  );
};
