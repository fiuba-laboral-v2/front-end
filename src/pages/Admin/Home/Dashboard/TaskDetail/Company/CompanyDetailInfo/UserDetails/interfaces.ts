import { ICompany } from "$interfaces/Company";
import { IUser } from "$interfaces/User";

export interface IUserDetailsContainerProps {
  company: ICompany<IUser>;
}

export interface IUserDetailsProps extends IUserDetailsContainerProps {
  company: ICompany<IUser>;
  translations: IAdminCompanyDetails;
}

export interface IAdminCompanyDetails {
  cuit: string;
}
