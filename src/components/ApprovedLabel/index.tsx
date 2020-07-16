import React, { FunctionComponent } from "react";
import CheckIcon from "@material-ui/icons/Check";
import { useGetStatusText } from "$models/hooks";
import { Label } from "$components/Label";
import { IStatusLabelProps } from "$components/StatusLabel";

export const ApprovedLabel: FunctionComponent<Omit<IStatusLabelProps, "status">> = (
  {
    className,
    withText = true
  }
) => {
  const text = useGetStatusText({ withText, translationGroup: "approvedLabel" });
  return <Label className={className} Icon={CheckIcon} color="green" text={text}/>;
};
