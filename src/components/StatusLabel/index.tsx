import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "../../interfaces/ApprovalStatus";
import { ApprovedLabel } from "$components/ApprovedLabel";
import { RejectedLabel } from "$components/RejectedLabel";
import { PendingLabel } from "$components/PendingLabel";

export const StatusLabel: FunctionComponent<IStatusLabelProps> = (
  {
    status,
    useTooltip
  }
) => (
  <>
    {
      status === ApprovalStatus.approved &&
      <ApprovedLabel useTooltip={useTooltip}/>
    }
    {
      status === ApprovalStatus.rejected &&
      <RejectedLabel useTooltip={useTooltip}/>
    }
    {
      status === ApprovalStatus.pending &&
      <PendingLabel useTooltip={useTooltip}/>
    }
  </>
);

export interface ILabelProps {
  useTooltip: boolean;
}

interface IStatusLabelProps extends ILabelProps {
  status: ApprovalStatus;
}
