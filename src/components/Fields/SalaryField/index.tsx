import React, { FunctionComponent } from "react";

import { NumberInput } from "$components/NumberInput";
import { IBaseProps } from "$components/NumberInput/interfaces";

import { FormikValidator } from "$models/FormikValidator";
import { validateIntegerInRange } from "validations-fiuba-laboral-v2";

export const SalaryField: FunctionComponent<ISalaryFieldProps> = ({ mandatory, ...props }) => (
  <NumberInput
    mandatory={mandatory}
    {...props}
    validate={FormikValidator({
      validator: validateIntegerInRange({ min: { value: 0, include: false } }),
      mandatory
    })}
  />
);

interface ISalaryFieldProps extends IBaseProps {
  mandatory?: boolean;
}
