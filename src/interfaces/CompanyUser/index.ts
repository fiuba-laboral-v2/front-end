import { IUser } from "../User";

export interface ICompanyUser {
  uuid: string;
  companyUuid: string;
  userUuid: string;
  role: string;
  user: IUser;
  updatedAt: string;
  createdAt: string;
}
