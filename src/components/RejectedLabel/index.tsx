import React, { FunctionComponent } from "react";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import { Label } from "$components/Label";
import { ILabelLayoutProps, ILabelTextProps } from "$components/Label";

export const RejectedLabel: FunctionComponent<ILabelLayoutProps & ILabelTextProps> = props => (
  <Label
    Icon={NotInterestedIcon}
    color="red"
    {...props}
  />
);
