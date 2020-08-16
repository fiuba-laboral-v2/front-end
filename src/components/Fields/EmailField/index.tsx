import React, { FunctionComponent } from "react";
import { TextInput } from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";
import { FieldAttributes } from "formik/dist/Field";
import { validateEmail } from "validations-fiuba-laboral-v2";

export const EmailField: FunctionComponent<FieldAttributes<any>> = ({ name, label }) => (
  <TextInput
    name={name}
    label={label}
    type="email"
    validate={FormikValidator({ validator: validateEmail, mandatory: true })}
  />
);
