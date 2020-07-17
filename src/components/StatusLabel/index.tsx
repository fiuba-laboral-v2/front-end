import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "../../interfaces/ApprovalStatus";
import { ApprovedLabel } from "$components/ApprovedLabel";
import { RejectedLabel } from "$components/RejectedLabel";
import { PendingLabel } from "$components/PendingLabel";

export const StatusLabel: FunctionComponent<IStatusLabelProps> = (
  {
    status,
    withText
  }
) => (
  <>
    {
      status === ApprovalStatus.approved &&
      <ApprovedLabel withText={withText}/>
    }
    {
      status === ApprovalStatus.rejected &&
      <RejectedLabel withText={withText}/>
    }
    {
      status === ApprovalStatus.pending &&
      <PendingLabel withText={withText}/>
    }
  </>
);

export interface ILabelProps {
  withText: boolean;
}

interface IStatusLabelProps extends ILabelProps {
  status: ApprovalStatus;
}
