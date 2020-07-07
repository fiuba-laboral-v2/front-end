import { IUser } from "$interfaces/User";
import { ApprovalStatus } from "../ApprovalStatus";

export interface ICompany {
  uuid: string;
  cuit: string;
  companyName: string;
  slogan?: string;
  description?: string;
  logo?: string;
  website?: string;
  email?: string;
  createdAt: string;
  approvalStatus: ApprovalStatus;
  phoneNumbers?: string[];
  photos?: string[];
  users: IUser[];
}
