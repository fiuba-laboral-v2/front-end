import React, { FunctionComponent } from "react";
import CheckIcon from "@material-ui/icons/Check";
import { useStatusText } from "$models/hooks";
import { Label } from "$components/Label";
import { ILabelProps } from "$components/StatusLabel";

export const ApprovedLabel: FunctionComponent<ILabelProps> = (
  {
    className,
    withText = true
  }
) => {
  const text = useStatusText({ withText, translationGroup: "approvedLabel" });
  return <Label className={className} Icon={CheckIcon} color="green" text={text}/>;
};