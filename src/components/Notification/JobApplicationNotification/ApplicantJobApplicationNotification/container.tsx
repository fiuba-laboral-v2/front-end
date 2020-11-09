import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { JobApplicationNotification } from "../component";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Link } from "$components/Link";
import { IContainerProps } from "../interfaces";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const ApplicantJobApplicationNotificationContainer: FunctionComponent<IContainerProps> = ({
  notification,
  ...props
}) => {
  const translations = useTranslations<ITranslations>("applicantJobApplicationNotification");
  if (!translations) return <LoadingSpinner />;

  const title = {
    [ApprovalStatus.pending]: translations.pendingApplicantTitle,
    [ApprovalStatus.approved]: translations.approvedApplicantTitle,
    [ApprovalStatus.rejected]: translations.rejectedApplicantTitle
  }[notification.jobApplication.approvalStatus];

  const company = notification.jobApplication.offer.company;

  return (
    <JobApplicationNotification
      {...props}
      notification={notification}
      title={title}
      firstLink={
        <Link to={RoutesBuilder.applicant.companyProfile(company.uuid)}>{company.companyName}</Link>
      }
    />
  );
};

interface ITranslations {
  pendingApplicantTitle: string;
  approvedApplicantTitle: string;
  rejectedApplicantTitle: string;
}
