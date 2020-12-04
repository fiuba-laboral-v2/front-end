import {
  NEW_JOB_APPLICATION_COMPANY_NOTIFICATION_TYPE,
  APPROVED_OFFER_COMPANY_NOTIFICATION_TYPE
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
  __typename: NEW_JOB_APPLICATION_COMPANY_NOTIFICATION_TYPE;
  jobApplication: IJobApplication;
}

export interface ICompanyApprovedOfferNotification extends ICommonAttributes {
  __typename: APPROVED_OFFER_COMPANY_NOTIFICATION_TYPE;
  offer: IOffer;
}
