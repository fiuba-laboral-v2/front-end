import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "../../interfaces/ApprovalStatus";
import { ApprovedLabel } from "$components/ApprovedLabel";
import { RejectedLabel } from "$components/RejectedLabel";
import { PendingLabel } from "$components/PendingLabel";

export const StatusLabel: FunctionComponent<IStatusLabelProps> = (
  {
    status,
    className,
    withText = true
  }
) => (
  <>
    {
      status === ApprovalStatus.approved &&
      <ApprovedLabel className={className} withText={withText}/>
    }
    {
      status === ApprovalStatus.rejected &&
      <RejectedLabel className={className} withText={withText}/>
    }
    {
      status === ApprovalStatus.pending &&
      <PendingLabel className={className} withText={withText}/>
    }
  </>
);

export interface IStatusLabelProps {
  className?: string;
  withText?: boolean;
  status: ApprovalStatus;
}
