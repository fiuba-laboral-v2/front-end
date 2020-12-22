import { IUser } from "../User";

export interface ICompanyUser {
  uuid: string;
  companyUuid: string;
  userUuid: string;
  position: string;
  user: IUser;
  updatedAt: string;
  createdAt: string;
}
