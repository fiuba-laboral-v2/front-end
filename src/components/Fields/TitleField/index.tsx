import React, { FunctionComponent } from "react";
import { TextField } from "$components/Fields";
import { validateStringLength } from "validations-fiuba-laboral-v2";
import { ITextFieldProps } from "../TextField";

export const TitleField: FunctionComponent<ITextFieldProps> = ({ mandatory, ...props }) => (
  <TextField {...props} mandatory={mandatory} validator={validateStringLength} />
);
