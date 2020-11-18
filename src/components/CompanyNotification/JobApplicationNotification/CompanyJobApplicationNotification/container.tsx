import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { JobApplicationNotification } from "../component";
import { Link } from "$components/Link";

import { IContainerProps } from "../interfaces";

export const CompanyJobApplicationNotificationContainer: FunctionComponent<IContainerProps> = ({
  notification,
  ...props
}) => {
  const translations = useTranslations<ITranslations>("companyJobApplicationNotification");

  const applicant = notification.jobApplication.applicant;

  return (
    <JobApplicationNotification
      {...props}
      hideApprovalStatus
      notification={notification}
      title={translations?.companyTitle || ""}
      firstLink={
        <Link to={RoutesBuilder.company.applicantDetail(applicant.uuid)}>
          {`${applicant.user.name} ${applicant.user.surname}`}
        </Link>
      }
    />
  );
};

interface ITranslations {
  companyTitle: string;
}
