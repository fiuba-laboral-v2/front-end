import React, { FunctionComponent } from "react";
import { TextInput, ITextInputProps } from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";
import { validateName } from "validations-fiuba-laboral-v2";

export const NameField: FunctionComponent<ITextInputProps> = ({ mandatory, ...props }) => (
  <TextInput
    {...props}
    mandatory={mandatory}
    validate={FormikValidator({ validator: validateName, mandatory })}
  />
);
