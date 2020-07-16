import React, { FunctionComponent } from "react";
import HistoryIcon from "@material-ui/icons/History";
import { useGetStatusText } from "$models/hooks";
import { Label } from "$components/Label";

export const PendingLabel: FunctionComponent<IPendingLabelProps> = (
  {
    className,
    withText = true
  }
) => {
  const text = useGetStatusText({ withText, translationGroup: "pendingLabel" });
  return <Label className={className} Icon={HistoryIcon} color="yellow" text={text}/>;
};

interface IPendingLabelProps {
  className?: string;
  withText?: boolean;
}
