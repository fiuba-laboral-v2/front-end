import { useQuery } from "../useQuery";
import { IUser } from "$interfaces/User";
import { GET_CURRENT_USER } from "$queries";

export const useCurrentUser = () => useQuery<{}, IUseCurrentUser>(GET_CURRENT_USER);

interface IUseCurrentUser {
  getCurrentUser: IAdminUser | ICurrentApplicant | ICurrentCompany | undefined;
}

export interface IAdminUser extends IUser {
  admin: { userUuid: string; };
  company?: undefined;
  applicant?: undefined;
}

export interface ICurrentApplicant extends IUser {
  admin?: undefined;
  company?: undefined;
  applicant: { uuid: string };
}

export interface ICurrentCompany extends IUser {
  admin?: undefined;
  company: { uuid: string };
  applicant?: undefined;
}
