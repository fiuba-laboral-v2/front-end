import React, { FunctionComponent } from "react";
import HistoryIcon from "@material-ui/icons/History";
import { useStatusText } from "$models/hooks";
import { Label } from "$components/Label";
import { ILabelProps } from "$components/StatusLabel";

export const PendingLabel: FunctionComponent<ILabelProps> = props => {
  const text = useStatusText({ translationGroup: "pendingLabel" });
  return <Label
    Icon={HistoryIcon}
    color="darkYellow"
    text={text}
    {...props}
  />;
};
