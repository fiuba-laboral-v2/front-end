import React, { FunctionComponent } from "react";
import { FormikValidator } from "$models/FormikValidator";
import { validateIntegerInRange } from "validations-fiuba-laboral-v2";
import { NumberInput } from "../index";
import { IBaseProps } from "../interfaces";

export const PositiveNumberInput: FunctionComponent<IBaseProps> = props => (
  <NumberInput
    {...props}
    validate={FormikValidator({
      validator: validateIntegerInRange({ min: { value: 0, include: false } }),
      mandatory: true
    })}
  />
);
