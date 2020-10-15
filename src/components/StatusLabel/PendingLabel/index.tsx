import React, { FunctionComponent } from "react";
import HistoryIcon from "@material-ui/icons/History";
import { Label } from "$components/Label";
import { ILabelLayoutProps, ILabelTextProps } from "$components/Label";

export const PendingLabel: FunctionComponent<ILabelLayoutProps & ILabelTextProps> = props => (
  <Label Icon={HistoryIcon} color="DarkYellow" {...props} />
);
