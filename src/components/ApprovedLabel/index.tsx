import React, { FunctionComponent } from "react";
import CheckIcon from "@material-ui/icons/Check";
import { useStatusText } from "$models/hooks";
import { Label } from "$components/Label";
import { ILabelProps } from "$components/StatusLabel";

export const ApprovedLabel: FunctionComponent<ILabelProps> = ({ useTooltip }) => {
  const text = useStatusText({ translationGroup: "approvedLabel" });
  return <Label Icon={CheckIcon} color="green" text={text} useTooltip={useTooltip}/>;
};
