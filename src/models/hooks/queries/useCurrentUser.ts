import { useQuery } from "$hooks/useQuery";
import { IUser } from "$interfaces/User";
import { GET_CURRENT_USER } from "$queries";
import { CurrentUser } from "$models/CurrentUser";
import { ICurrentCompanyAttributes } from "$models/CurrentCompany";

export const useCurrentUser = () => {
  const response = useQuery<{}, IUseCurrentUser>(GET_CURRENT_USER);

  if (response.data) {
    return {
      ...response,
      data: { getCurrentUser: CurrentUser(response.data?.getCurrentUser) }
    };
  }
  return response;
};

export interface IUseCurrentUser {
  getCurrentUser: TCurrentUser | undefined;
}

export type TCurrentUser = IAdminUser | ICurrentApplicant | ICurrentCompany;

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
  company: ICurrentCompanyAttributes;
  applicant?: undefined;
}
