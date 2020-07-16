import React, { FunctionComponent } from "react";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import { useGetStatusText } from "$models/hooks";
import { Label } from "$components/Label";

export const RejectedLabel: FunctionComponent<IRejectedLabelProps> = (
  {
    className,
    withText = true
  }
) => {
  const text = useGetStatusText({ withText, translationGroup: "rejectedLabel" });
  return <Label className={className} Icon={NotInterestedIcon} color="red" text={text}/>;
};

interface IRejectedLabelProps {
  className?: string;
  withText?: boolean;
}
