import React, { FunctionComponent } from "react";
import { ApprovedLabel } from "./ApprovedLabel";
import { RejectedLabel } from "./RejectedLabel";
import { PendingLabel } from "./PendingLabel";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ILabelLayoutProps, ILabelTextProps } from "$components/Label";
import { ExpiredLabel } from "./ExpiredLabel";

export const StatusLabel: FunctionComponent<IStatusLabelProps> = ({
  status,
  hasExpired,
  ...props
}) => (
  <>
    {hasExpired && <ExpiredLabel {...props} />}
    {!hasExpired && status === ApprovalStatus.approved && <ApprovedLabel {...props} />}
    {status === ApprovalStatus.rejected && <RejectedLabel {...props} />}
    {status === ApprovalStatus.pending && <PendingLabel {...props} />}
  </>
);

export interface IStatusLabelProps extends ILabelContainerProps {
  status?: ApprovalStatus;
}

export interface ILabelContainerProps extends ILabelLayoutProps, ILabelTextProps {
  hasExpired?: boolean;
  withStatusText?: boolean;
}
