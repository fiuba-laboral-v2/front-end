import React, { FunctionComponent } from "react";
import { validateIntegerInRange } from "validations-fiuba-laboral-v2";
import { INumberInputProps, NumberInput } from "../index";

export const PositiveNumberInput: FunctionComponent<IPositiveNumberInputProps> = ({
  mandatory,
  ...props
}) => (
  <NumberInput
    {...props}
    mandatory={mandatory}
    validator={validateIntegerInRange({ min: { value: 0, include: false } })}
  />
);

export interface IPositiveNumberInputProps extends INumberInputProps {
  mandatory: boolean;
}
