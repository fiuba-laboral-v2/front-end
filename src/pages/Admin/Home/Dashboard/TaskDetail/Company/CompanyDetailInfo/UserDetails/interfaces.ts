import { ICompany } from "$interfaces/Company";

export interface IUserDetailsContainerProps {
  company: ICompany;
}

export interface IUserDetailsProps extends IUserDetailsContainerProps {
  company: ICompany;
  translations: IAdminCompanyDetails;
}

export interface IAdminCompanyDetails {
  cuit: string;
}
