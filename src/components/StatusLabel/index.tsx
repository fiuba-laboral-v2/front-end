import React, { FunctionComponent } from "react";
import { ApprovedLabel } from "./ApprovedLabel";
import { RejectedLabel } from "./RejectedLabel";
import { PendingLabel } from "./PendingLabel";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ILabelLayoutProps, ILabelTextProps } from "$components/Label";

export const StatusLabel: FunctionComponent<IStatusLabelProps> = (
  {
    status,
    ...props
  }
) => (
  <>
    {
      status === ApprovalStatus.approved &&
      <ApprovedLabel {...props} />
    }
    {
      status === ApprovalStatus.rejected &&
      <RejectedLabel {...props} />
    }
    {
      status === ApprovalStatus.pending &&
      <PendingLabel {...props} />
    }
  </>
);

export interface IStatusLabelProps extends ILabelLayoutProps, ILabelTextProps {
  status?: ApprovalStatus;
}
