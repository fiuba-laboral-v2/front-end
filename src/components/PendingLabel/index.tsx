import React, { FunctionComponent } from "react";
import HistoryIcon from "@material-ui/icons/History";
import { useStatusText } from "$models/hooks";
import { Label } from "$components/Label";
import { ILabelLayoutProps } from "$components/Label";

export const PendingLabel: FunctionComponent<ILabelLayoutProps> = props => {
  const text = useStatusText({ translationGroup: "pendingLabel" });
  return <Label
    Icon={HistoryIcon}
    color="darkYellow"
    text={text}
    {...props}
  />;
};
