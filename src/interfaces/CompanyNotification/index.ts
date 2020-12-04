import {
  COMPANY_NEW_JOB_APPLICATION_NOTIFICATION_TYPE,
  COMPANY_APPROVED_OFFER_NOTIFICATION_TYPE
} from "$typenames";
import { IJobApplication } from "$interfaces/JobApplication";
import { IOffer } from "$interfaces/Offer";

export type TCompanyNotification =
  | ICompanyNewJobApplicationNotification
  | ICompanyApprovedOfferNotification;

interface ICommonAttributes {
  __typename: string;
  uuid: string;
  isNew: boolean;
  createdAt: string;
  adminEmail: string;
}

export interface ICompanyNewJobApplicationNotification extends ICommonAttributes {
  __typename: COMPANY_NEW_JOB_APPLICATION_NOTIFICATION_TYPE;
  jobApplication: IJobApplication;
}

export interface ICompanyApprovedOfferNotification extends ICommonAttributes {
  __typename: COMPANY_APPROVED_OFFER_NOTIFICATION_TYPE;
  offer: IOffer;
}
