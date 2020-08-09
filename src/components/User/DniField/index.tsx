import React, { FunctionComponent } from "react";
import { NumberInput } from "$components/NumberInput";
import { FormikValidator } from "$models/FormikValidator";
import { IField } from "../interfaces";
import { validateDni } from "validations-fiuba-laboral-v2";

export const DniField: FunctionComponent<IField> = ({ name, label }) => (
  <NumberInput
    name={name}
    label={label}
    validate={FormikValidator({ validator: validateDni, mandatory: true })}
  />
);
