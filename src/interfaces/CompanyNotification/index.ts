import {
  NEW_JOB_APPLICATION_COMPANY_NOTIFICATION_TYPE,
  APPROVED_OFFER_COMPANY_NOTIFICATION_TYPE,
  REJECTED_OFFER_COMPANY_NOTIFICATION_TYPE,
  APPROVED_PROFILE_COMPANY_NOTIFICATION_TYPE,
  REJECTED_PROFILE_COMPANY_NOTIFICATION_TYPE
} from "$typenames";
import { IJobApplication } from "$interfaces/JobApplication";
import { IOffer } from "$interfaces/Offer";

export type TCompanyNotification =
  | INewJobApplicationCompanyNotification
  | IApprovedOfferCompanyNotification
  | IRejectedOfferCompanyNotification
  | IApprovedProfileCompanyNotification
  | IRejectedProfileCompanyNotification;

interface ICommonAttributes {
  __typename: string;
  uuid: string;
  isNew: boolean;
  createdAt: string;
  adminEmail: string;
}

export interface INewJobApplicationCompanyNotification extends ICommonAttributes {
  __typename: NEW_JOB_APPLICATION_COMPANY_NOTIFICATION_TYPE;
  jobApplication: IJobApplication;
}

export interface IApprovedOfferCompanyNotification extends ICommonAttributes {
  __typename: APPROVED_OFFER_COMPANY_NOTIFICATION_TYPE;
  offer: IOffer;
}

export interface IRejectedOfferCompanyNotification extends ICommonAttributes {
  __typename: REJECTED_OFFER_COMPANY_NOTIFICATION_TYPE;
  moderatorMessage: string;
  offer: IOffer;
}

export interface IApprovedProfileCompanyNotification extends ICommonAttributes {
  __typename: APPROVED_PROFILE_COMPANY_NOTIFICATION_TYPE;
}

export interface IRejectedProfileCompanyNotification extends ICommonAttributes {
  __typename: REJECTED_PROFILE_COMPANY_NOTIFICATION_TYPE;
  moderatorMessage: string;
}
