import React, { FunctionComponent } from "react";
import CheckIcon from "@material-ui/icons/Check";
import { useStatusText } from "$models/hooks";
import { Label } from "$components/Label";
import { ILabelLayoutProps } from "$components/Label";

export const ApprovedLabel: FunctionComponent<ILabelLayoutProps> = props => {
  const text = useStatusText({ translationGroup: "approvedLabel" });
  return <Label
    Icon={CheckIcon}
    color="green"
    text={text}
    tooltipText={text}
    {...props}
  />;
};
