import { useQuery } from "../useQuery";
import { IUser } from "$interfaces/User";
import { GET_CURRENT_USER } from "$queries";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { CurrentUser } from "$models/CurrentUser";

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
  getCurrentUser: UseCurrentUser | undefined;
}

export type UseCurrentUser = IAdminUser | ICurrentApplicant | ICurrentCompany;

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
  company: {
    uuid: string;
    approvalStatus: ApprovalStatus
  };
  applicant?: undefined;
}
