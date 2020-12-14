import React, { FunctionComponent } from "react";
import { TApplicantNotification } from "$interfaces/ApplicantNotification";
import {
  APPROVED_JOB_APPLICATION_APPLICANT_NOTIFICATION,
  REJECTED_JOB_APPLICATION_APPLICANT_NOTIFICATION,
  APPROVED_PROFILE_APPLICANT_NOTIFICATION,
  REJECTED_PROFILE_APPLICANT_NOTIFICATION
} from "$typenames";
import { ApprovedJobApplicationApplicantNotification } from "./ApprovedJobApplicationApplicantNotification";
import { RejectedJobApplicationApplicantNotification } from "./RejectedJobApplicationApplicantNotification";
import { ApprovedProfileApplicantNotification } from "./ApprovedProfileApplicantNotification";
import { RejectedProfileApplicantNotification } from "./RejectedProfileApplicantNotification";

export const ApplicantNotification: FunctionComponent<IComponentProps> = ({
  className,
  notification
}) => (
  <>
    {notification.__typename === APPROVED_JOB_APPLICATION_APPLICANT_NOTIFICATION && (
      <ApprovedJobApplicationApplicantNotification
        className={className}
        notification={notification}
      />
    )}
    {notification.__typename === REJECTED_JOB_APPLICATION_APPLICANT_NOTIFICATION && (
      <RejectedJobApplicationApplicantNotification
        className={className}
        notification={notification}
      />
    )}
    {notification.__typename === APPROVED_PROFILE_APPLICANT_NOTIFICATION && (
      <ApprovedProfileApplicantNotification className={className} notification={notification} />
    )}
    {notification.__typename === REJECTED_PROFILE_APPLICANT_NOTIFICATION && (
      <RejectedProfileApplicantNotification className={className} notification={notification} />
    )}
  </>
);

interface IComponentProps {
  className?: string;
  notification: TApplicantNotification;
}
