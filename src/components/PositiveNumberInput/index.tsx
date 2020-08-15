import React, { FunctionComponent } from "react";
import { FormikValidator } from "../../models/FormikValidator";
import { validateIntegerInRange } from "validations-fiuba-laboral-v2";
import { NumberInput, INumberInputProps } from "../NumberInput";

export const PositiveNumberInput: FunctionComponent<PositiveNumberInputProps> = props => (
  <NumberInput
    {...props}
    validate={FormikValidator({
      validator: validateIntegerInRange({ min: { value: 0, include: false } }),
      mandatory: true
    })}
  />
);

type PositiveNumberInputProps = Omit<INumberInputProps, "validate">;
