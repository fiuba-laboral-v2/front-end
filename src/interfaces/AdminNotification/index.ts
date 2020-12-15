import { UPDATED_COMPANY_PROFILE_ADMIN_NOTIFICATION_TYPE } from "$typenames";
import { ICompany } from "$interfaces/Company";

export type TAdminNotification = IUpdatedCompanyProfileAdminNotification;

interface ICommonAttributes {
  __typename: string;
  uuid: string;
  isNew: boolean;
  createdAt: string;
}

export interface IUpdatedCompanyProfileAdminNotification extends ICommonAttributes {
  __typename: UPDATED_COMPANY_PROFILE_ADMIN_NOTIFICATION_TYPE;
  company: ICompany;
}
