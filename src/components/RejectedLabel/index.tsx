import React, { FunctionComponent } from "react";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import { useStatusText } from "$models/hooks";
import { Label } from "$components/Label";
import { ILabelProps } from "$components/StatusLabel";

export const RejectedLabel: FunctionComponent<ILabelProps> = (
  {
    className,
    withText = true
  }
) => {
  const text = useStatusText({ withText, translationGroup: "rejectedLabel" });
  return <Label className={className} Icon={NotInterestedIcon} color="red" text={text}/>;
};
