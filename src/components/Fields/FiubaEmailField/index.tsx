import React, { FunctionComponent } from "react";
import { TextField } from "$components/Fields";
import { validateFiubaEmail } from "validations-fiuba-laboral-v2";
import { ITextFieldProps } from "../TextField";

export const FiubaEmailField: FunctionComponent<IEmailFieldProps> = ({ mandatory, ...props }) => (
  <TextField
    {...props}
    mandatory={mandatory}
    type="email"
    autoComplete="email"
    validator={validateFiubaEmail}
  />
);

interface IEmailFieldProps extends ITextFieldProps {
  mandatory?: boolean;
}
