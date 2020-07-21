import React, { FunctionComponent } from "react";
import CheckIcon from "@material-ui/icons/Check";
import { useStatusText } from "$models/hooks";
import { Label } from "$components/Label";
import { ILabelProps } from "$components/StatusLabel";

export const ApprovedLabel: FunctionComponent<ILabelProps> = (
  {
    className,
    useTooltip,
    fixedPosition
  }
) => {
  const text = useStatusText({ translationGroup: "approvedLabel" });
  return <Label
    className={className}
    Icon={CheckIcon}
    color="green"
    text={text}
    useTooltip={useTooltip}
    fixedPosition={fixedPosition}
  />;
};
