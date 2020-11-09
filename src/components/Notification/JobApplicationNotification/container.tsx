import React, { FunctionComponent } from "react";
import { useCurrentUser, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { JobApplicationNotification } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";

import { IContainerProps, ITranslations } from "./interfaces";
import { ApprovalStatus } from "../../../interfaces/ApprovalStatus";

export const JobApplicationNotificationContainer: FunctionComponent<IContainerProps> = ({
  notification,
  ...props
}) => {
  const currentUserResponse = useCurrentUser();
  const translations = useTranslations<ITranslations>("jobApplicationNotification");

  if (currentUserResponse.loading || !translations) return <LoadingSpinner />;
  if (currentUserResponse.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError()} />;
  }

  const buildTitleLabel = () => {
    const currentUser = currentUserResponse.data.getCurrentUser;
    if (currentUser?.company) return translations.companyTitle;
    if (currentUser?.applicant) {
      return {
        [ApprovalStatus.pending]: translations.pendingApplicantTitle,
        [ApprovalStatus.approved]: translations.approvedApplicantTitle,
        [ApprovalStatus.rejected]: translations.rejectedApplicantTitle
      }[notification.jobApplication.approvalStatus];
    }
    return "";
  };

  return (
    <JobApplicationNotification {...props} notification={notification} title={buildTitleLabel()} />
  );
};
