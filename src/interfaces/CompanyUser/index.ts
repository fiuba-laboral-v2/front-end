import { IUser } from "../User";

export interface ICompanyUser {
  uuid: string;
  companyUuid: string;
  userUuid: string;
  user: IUser;
  updatedAt: string;
  createdAt: string;
}
