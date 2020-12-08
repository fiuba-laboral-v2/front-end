import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations } from "$hooks";

import { Notification } from "$components/Notification";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { OfferIcon } from "$components/Icons/OfferIcon";
import { StatusIcon } from "$components/StatusIcon";
import { JobApplicationNotificationBody } from "$components/JobApplicationNotificationBody";

import { IApprovedJobApplicationApplicantNotification } from "$interfaces/ApplicantNotification";

export const ApprovedJobApplicationApplicantNotificationContainer: FunctionComponent<IContainerProps> = ({
  className,
  notification
}) => {
  const translations = useTranslations<{ title: string }>("approvedOfferCompanyNotification");

  const {
    jobApplication: { applicant, offer, approvalStatus }
  } = notification;

  return (
    <Notification
      className={className}
      notification={notification}
      icon={<StatusIcon Icon={OfferIcon} approvalStatus={approvalStatus} />}
    >
      <NotificationTitle>{translations?.title || ""}</NotificationTitle>
      <JobApplicationNotificationBody
        applicant={applicant}
        offer={offer}
        applicantLink={RoutesBuilder.applicant.myProfile()}
        offerLink={RoutesBuilder.applicant.offerDetail}
      />
    </Notification>
  );
};

interface IContainerProps {
  className?: string;
  notification: IApprovedJobApplicationApplicantNotification;
}
