import React, { FunctionComponent } from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { ILabelLayoutProps, ILabelTextProps, Label } from "$components/Label";

export const ExpiredLabel: FunctionComponent<ILabelLayoutProps & ILabelTextProps> = ({
  ...props
}) => <Label Icon={AccessTimeIcon} color="Grey" {...props} />;
