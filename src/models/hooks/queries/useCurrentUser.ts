import { useQuery } from "../useQuery";
import { IUser } from "$interfaces/User";
import { IApplicant } from "$interfaces/Applicant";
import { ICompany } from "$interfaces/Company";
import { GET_CURRENT_USER } from "$queries";

export const useCurrentUser = () => useQuery<{}, IUseCurrentUser>(GET_CURRENT_USER);

interface IUseCurrentUser {
  getCurrentUser: ICurrentUser | ICurrentApplicant | ICurrentCompany | undefined;
}

export interface ICurrentUser extends IUser {
  company?: undefined;
  applicant?: undefined;
}

export interface ICurrentApplicant extends IUser {
  company?: undefined;
  applicant: IApplicant;
}

export interface ICurrentCompany extends IUser {
  company: ICompany;
  applicant?: undefined;
}
