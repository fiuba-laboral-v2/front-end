import React, { FunctionComponent } from "react";
import { TextField } from "$components/Fields";
import { validateEmail } from "validations-fiuba-laboral-v2";
import { ITextFieldProps } from "../TextField";

export const EmailField: FunctionComponent<IEmailFieldProps> = ({ mandatory, ...props }) => (
  <TextField
    {...props}
    mandatory={mandatory}
    type="email"
    autoComplete="email"
    validator={validateEmail}
  />
);

interface IEmailFieldProps extends ITextFieldProps {
  mandatory?: boolean;
}
