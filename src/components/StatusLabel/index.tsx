import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "../../interfaces/ApprovalStatus";
import { ApprovedLabel } from "$components/ApprovedLabel";
import { RejectedLabel } from "$components/RejectedLabel";
import { PendingLabel } from "$components/PendingLabel";

export const StatusLabel: FunctionComponent<IStatusLabelProps> = (
  {
    className,
    status,
    useTooltip,
    fixedPosition
  }
) => (
  <>
    {
      status === ApprovalStatus.approved &&
      <ApprovedLabel className={className} useTooltip={useTooltip} fixedPosition={fixedPosition} />
    }
    {
      status === ApprovalStatus.rejected &&
      <RejectedLabel className={className} useTooltip={useTooltip} fixedPosition={fixedPosition} />
    }
    {
      status === ApprovalStatus.pending &&
      <PendingLabel className={className} useTooltip={useTooltip} fixedPosition={fixedPosition} />
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
