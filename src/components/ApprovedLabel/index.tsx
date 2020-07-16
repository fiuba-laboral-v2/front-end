import React, { FunctionComponent } from "react";
import CheckIcon from "@material-ui/icons/Check";
import { useGetStatusText } from "$models/hooks";
import { Label } from "$components/Label";

export const ApprovedLabel: FunctionComponent<IApprovedLabelProps> = (
  {
    className,
    withText = true
  }
) => {
  const text = useGetStatusText({ withText, translationGroup: "approvedLabel" });
  return <Label className={className} Icon={CheckIcon} color="green" text={text}/>;
};

interface IApprovedLabelProps {
  className?: string;
  withText?: boolean;
}
