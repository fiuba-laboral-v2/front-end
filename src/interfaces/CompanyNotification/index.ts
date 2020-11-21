import { COMPANY_NEW_JOB_APPLICATION_NOTIFICATION_TYPE } from "$typenames";
import { IJobApplication } from "$interfaces/JobApplication";

export type TCompanyNotification = ICompanyNewJobApplicationNotification;

export interface ICompanyNewJobApplicationNotification {
  __typename: COMPANY_NEW_JOB_APPLICATION_NOTIFICATION_TYPE;
  uuid: string;
  isNew: boolean;
  createdAt: string;
  adminEmail: string;
  jobApplication: IJobApplication;
}
