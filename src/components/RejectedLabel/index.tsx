import React, { FunctionComponent } from "react";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import { useStatusText } from "$models/hooks";
import { Label } from "$components/Label";
import { ILabelProps } from "$components/StatusLabel";

export const RejectedLabel: FunctionComponent<ILabelProps> = ({ withText }) => {
  const text = useStatusText({ translationGroup: "rejectedLabel" });
  return <Label Icon={NotInterestedIcon} color="red" text={text} withText={withText} />;
};
