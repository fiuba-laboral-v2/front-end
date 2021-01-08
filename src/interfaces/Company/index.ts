import { ApprovalStatus } from "../ApprovalStatus";
import { IUser } from "../User";

export interface ICompany<T extends IUser | undefined = undefined> {
  uuid: string;
  cuit: string;
  companyName: string;
  businessName: string;
  businessSector: string;
  slogan?: string;
  description?: string;
  logo?: string;
  website?: string;
  email?: string;
  createdAt: string;
  updatedAt: string;
  approvalStatus: ApprovalStatus;
  phoneNumbers?: string[];
  photos?: string[];
  users: T[];
}
