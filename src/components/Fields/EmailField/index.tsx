import React, { FunctionComponent } from "react";
import { TextInput, ITextInputProps } from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";
import { validateEmail } from "validations-fiuba-laboral-v2";

export const EmailField: FunctionComponent<IEmailFieldProps> = ({
  mandatory = false,
  ...props
}) => (
  <TextInput
    {...props}
    required={mandatory}
    type="email"
    autoComplete="email"
    validate={FormikValidator({ validator: validateEmail, mandatory })}
  />
);

interface IEmailFieldProps extends ITextInputProps {
  mandatory?: boolean;
}
