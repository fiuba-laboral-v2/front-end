import { ICompany } from "$interfaces/Company";
import { IUser } from "$interfaces/User";

export interface IUserDetailsContainerProps {
  company?: ICompany<IUser>;
}

export interface IUserDetailsProps extends IUserDetailsContainerProps {
  translations?: IAdminCompanyDetails;
  hidden?: boolean;
}

export interface IAdminCompanyDetails {
  cuit: string;
}
