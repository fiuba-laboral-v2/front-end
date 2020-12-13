import {
  APPROVED_JOB_APPLICATION_APPLICANT_NOTIFICATION_TYPE,
  REJECTED_JOB_APPLICATION_APPLICANT_NOTIFICATION_TYPE,
  APPROVED_PROFILE_APPLICANT_NOTIFICATION_TYPE
} from "$typenames";
import { IJobApplication } from "$interfaces/JobApplication";

export type TApplicantNotification =
  | IApprovedJobApplicationApplicantNotification
  | IRejectedJobApplicationApplicantNotification;

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

export interface IRejectedJobApplicationApplicantNotification extends ICommonAttributes {
  __typename: REJECTED_JOB_APPLICATION_APPLICANT_NOTIFICATION_TYPE;
  moderatorMessage: string;
  jobApplication: IJobApplication;
}

export interface IApprovedProfileApplicantNotification extends ICommonAttributes {
  __typename: APPROVED_PROFILE_APPLICANT_NOTIFICATION_TYPE;
}
