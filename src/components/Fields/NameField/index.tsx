import React, { FunctionComponent } from "react";
import { TextInput } from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";
import { IField } from "../interfaces";
import { validateName } from "validations-fiuba-laboral-v2";

export const NameField: FunctionComponent<IField> = ({ name, label }) => (
  <TextInput
    name={name}
    label={label}
    validate={FormikValidator({ validator: validateName, mandatory: true })}
  />
);
