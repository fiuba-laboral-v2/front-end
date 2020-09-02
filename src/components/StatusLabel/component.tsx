import React, { FunctionComponent } from "react";
import { ApprovedLabel } from "$components/ApprovedLabel";
import { RejectedLabel } from "$components/RejectedLabel";
import { PendingLabel } from "$components/PendingLabel";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IComponentProps } from "./interfaces";

export const StatusLabel: FunctionComponent<IComponentProps> = (
  {
    translations,
    status,
    ...props
  }
) => (
  <>
    {
      status === ApprovalStatus.approved &&
      <ApprovedLabel
        {...props}
        text={translations.approvedLabel}
        tooltipText={translations.approvedLabel}
      />
    }
    {
      status === ApprovalStatus.rejected &&
      <RejectedLabel
        {...props}
        text={translations.rejectedLabel}
        tooltipText={translations.rejectedLabel}
      />
    }
    {
      status === ApprovalStatus.pending &&
      <PendingLabel
        {...props}
        text={translations.pendingLabel}
        tooltipText={translations.pendingLabel}
      />
    }
  </>
);
