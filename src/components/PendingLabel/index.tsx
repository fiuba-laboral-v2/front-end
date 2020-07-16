import React, { FunctionComponent } from "react";
import HistoryIcon from "@material-ui/icons/History";
import { useStatusText } from "$models/hooks";
import { Label } from "$components/Label";
import { ILabelProps } from "$components/StatusLabel";

export const PendingLabel: FunctionComponent<ILabelProps> = (
  {
    className,
    withText = true
  }
) => {
  const text = useStatusText({ withText, translationGroup: "pendingLabel" });
  return <Label className={className} Icon={HistoryIcon} color="darkYellow" text={text}/>;
};
