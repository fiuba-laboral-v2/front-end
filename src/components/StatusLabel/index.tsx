import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "../../interfaces/ApprovalStatus";
import { ApprovedLabel } from "$components/ApprovedLabel";
import { RejectedLabel } from "$components/RejectedLabel";
import { PendingLabel } from "$components/PendingLabel";

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

export interface ILabelProps {
  className?: string;
  useTooltip: boolean;
  fixedPosition: boolean;
}

export interface IStatusLabelProps extends ILabelProps {
  status: ApprovalStatus;
}
