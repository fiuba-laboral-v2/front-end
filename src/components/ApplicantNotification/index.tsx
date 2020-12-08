import React, { FunctionComponent } from "react";
import { TApplicantNotification } from "$interfaces/ApplicantNotification";
import { APPROVED_JOB_APPLICATION_APPLICANT_NOTIFICATION } from "$typenames";

export const ApplicantNotification: FunctionComponent<IComponentProps> = ({ notification }) => (
  <>{notification.__typename === APPROVED_JOB_APPLICATION_APPLICANT_NOTIFICATION && <div />}</>
);

interface IComponentProps {
  className?: string;
  notification: TApplicantNotification;
}
