import { useQuery } from "../useQuery";
import { IUser } from "$interfaces/User";
import { GET_CURRENT_USER } from "$queries";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { buildCurrentUser } from "../../CurrentUser";

export const useCurrentUser = () =>
  buildCurrentUser(useQuery<{}, IUseCurrentUser>(GET_CURRENT_USER));

export interface IUseCurrentUser {
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
  company: {
    uuid: string;
    approvalStatus: ApprovalStatus
  };
  applicant?: undefined;
}
