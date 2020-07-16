import React, { FunctionComponent } from "react";
import HistoryIcon from "@material-ui/icons/History";
import { useStatusText } from "$models/hooks";
import { Label } from "$components/Label";
import { IStatusLabelProps } from "$components/StatusLabel";

export const PendingLabel: FunctionComponent<Omit<IStatusLabelProps, "status">> = (
  {
    className,
    withText = true
  }
) => {
  const text = useStatusText({ withText, translationGroup: "pendingLabel" });
  return <Label className={className} Icon={HistoryIcon} color="darkYellow" text={text}/>;
};
