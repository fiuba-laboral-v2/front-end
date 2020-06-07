import { useQuery } from "../useQuery";
import { IUser } from "$interfaces/User";
import { GET_CURRENT_USER } from "$queries";

export const useCurrentUser = () => useQuery<{}, IUseCurrentUser>(GET_CURRENT_USER);

interface IUseCurrentUser {
  getCurrentUser: IAdminUser | ICurrentApplicant | ICurrentCompany | undefined;
}

export interface IAdminUser extends IUser {
  isAdmin: true;
  company?: undefined;
  applicant?: undefined;
}

export interface ICurrentApplicant extends IUser {
  isAdmin: false;
  company?: undefined;
  applicant: { uuid: string };
}

export interface ICurrentCompany extends IUser {
  isAdmin: false;
  company: { uuid: string };
  applicant?: undefined;
}
