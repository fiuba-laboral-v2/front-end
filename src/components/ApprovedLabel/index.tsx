import React, { FunctionComponent } from "react";
import CheckIcon from "@material-ui/icons/Check";
import { Label } from "$components/Label";
import { ILabelLayoutProps, ILabelTextProps } from "$components/Label";

export const ApprovedLabel: FunctionComponent<ILabelLayoutProps & ILabelTextProps> = props => (
  <Label
    Icon={CheckIcon}
    color="green"
    {...props}
  />
);
