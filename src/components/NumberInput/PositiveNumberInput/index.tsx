import React, { FunctionComponent } from "react";
import { validateIntegerInRange } from "validations-fiuba-laboral-v2";
import { IBaseNumberInputProps, NumberInput } from "../index";

export const PositiveNumberInput: FunctionComponent<IBaseNumberInputProps> = props => (
  <NumberInput
    {...props}
    validator={validateIntegerInRange({ min: { value: 0, include: false } })}
  />
);
