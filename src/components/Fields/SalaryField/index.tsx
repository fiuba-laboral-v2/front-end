import React, { FunctionComponent } from "react";
import { INumberInputProps, NumberInput } from "$components/NumberInput";
import { validateIntegerInRange } from "validations-fiuba-laboral-v2";

export const SalaryField: FunctionComponent<ISalaryFieldProps> = ({ mandatory, ...props }) => (
  <NumberInput
    mandatory={mandatory}
    {...props}
    validator={validateIntegerInRange({ min: { value: 0, include: false } })}
  />
);

interface ISalaryFieldProps extends INumberInputProps {
  mandatory?: boolean;
}
