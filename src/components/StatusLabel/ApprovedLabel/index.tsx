import React, { FunctionComponent } from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CheckIcon from "@material-ui/icons/Check";
import { Label } from "$components/Label";
import { ILabelContainerProps } from "$components/StatusLabel";

export const ApprovedLabel: FunctionComponent<ILabelContainerProps> = ({
  hasExpired,
  withStatusText,
  ...props
}) => {
  const icon = withStatusText ? AccessTimeIcon : CheckIcon;
  return (
    <>
      {hasExpired ? (
        <Label Icon={AccessTimeIcon} color="Grey" {...props} />
      ) : (
        <Label Icon={icon} color="Green" {...props} />
      )}
    </>
  );
};
