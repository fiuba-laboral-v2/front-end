import {
  PENDING_JOB_APPLICATION_APPLICANT_NOTIFICATION_TYPE,
  APPROVED_JOB_APPLICATION_APPLICANT_NOTIFICATION_TYPE,
  REJECTED_JOB_APPLICATION_APPLICANT_NOTIFICATION_TYPE,
  APPROVED_PROFILE_APPLICANT_NOTIFICATION_TYPE,
  REJECTED_PROFILE_APPLICANT_NOTIFICATION_TYPE
} from "$typenames";
import { IJobApplication, IJobApplicationAttributes } from "$interfaces/JobApplication";

export type TApplicantNotificationAttributes =
  | IPendingJobApplicationAttributesApplicantNotification
  | IApprovedJobApplicationAttributesApplicantNotification
  | IRejectedJobApplicationAttributesApplicantNotification
  | IApprovedProfileApplicantNotification
  | IRejectedProfileApplicantNotification;

export type TApplicantNotification =
  | IApprovedJobApplicationApplicantNotification
  | IRejectedJobApplicationApplicantNotification
  | IApprovedProfileApplicantNotification
  | IRejectedProfileApplicantNotification
  | IPendingJobApplicationApplicantNotification;

interface ICommonAttributes {
  __typename: string;
  uuid: string;
  isNew: boolean;
  createdAt: string;
  adminEmail: string;
}

export interface IPendingJobApplicationAttributesApplicantNotification extends ICommonAttributes {
  __typename: PENDING_JOB_APPLICATION_APPLICANT_NOTIFICATION_TYPE;
  jobApplication: IJobApplicationAttributes;
}

export interface IApprovedJobApplicationAttributesApplicantNotification extends ICommonAttributes {
  __typename: APPROVED_JOB_APPLICATION_APPLICANT_NOTIFICATION_TYPE;
  jobApplication: IJobApplicationAttributes;
}

export interface IRejectedJobApplicationAttributesApplicantNotification extends ICommonAttributes {
  __typename: REJECTED_JOB_APPLICATION_APPLICANT_NOTIFICATION_TYPE;
  moderatorMessage: string;
  jobApplication: IJobApplicationAttributes;
}

export interface IPendingJobApplicationApplicantNotification extends ICommonAttributes {
  __typename: PENDING_JOB_APPLICATION_APPLICANT_NOTIFICATION_TYPE;
  jobApplication: IJobApplication;
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

export interface IRejectedProfileApplicantNotification extends ICommonAttributes {
  __typename: REJECTED_PROFILE_APPLICANT_NOTIFICATION_TYPE;
  moderatorMessage: string;
}
