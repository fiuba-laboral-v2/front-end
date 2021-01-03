import React, { FunctionComponent } from "react";
import { validateIntegerInRange } from "validations-fiuba-laboral-v2";
import { IBaseNumberField, NumberField } from "../index";

export const HoursPerDayField: FunctionComponent<IBaseNumberField> = props => (
  <NumberField
    {...props}
    validator={validateIntegerInRange({
      min: { value: 0, include: false },
      max: { value: 24, include: true }
    })}
  />
);
