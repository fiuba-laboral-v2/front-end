import { APPROVED_JOB_APPLICATION_APPLICANT_NOTIFICATION_TYPE } from "$typenames";
import { IJobApplication } from "$interfaces/JobApplication";

export type TApplicantNotification = IApprovedJobApplicationApplicantNotification;

interface ICommonAttributes {
  __typename: string;
  uuid: string;
  isNew: boolean;
  createdAt: string;
  adminEmail: string;
}

export interface IApprovedJobApplicationApplicantNotification extends ICommonAttributes {
  __typename: APPROVED_JOB_APPLICATION_APPLICANT_NOTIFICATION_TYPE;
  jobApplication: IJobApplication;
}
