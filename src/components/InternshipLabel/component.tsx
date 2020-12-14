import React, { FunctionComponent } from "react";
import { Label } from "../Label";
import { IInternshipLabelProps } from "./interfaces";

export const InternshipLabel: FunctionComponent<IInternshipLabelProps> = props => (
  <Label color="Purple" type="large" {...props} />
);
