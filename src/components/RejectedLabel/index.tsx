import React, { FunctionComponent } from "react";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import { useStatusText } from "$models/hooks";
import { Label } from "$components/Label";
import { ILabelLayoutProps } from "$components/Label";

export const RejectedLabel: FunctionComponent<ILabelLayoutProps> = props => {
  const text = useStatusText({ translationGroup: "rejectedLabel" });
  return <Label
    Icon={NotInterestedIcon}
    color="red"
    text={text}
    tooltipText={text}
    {...props}
  />;
};
