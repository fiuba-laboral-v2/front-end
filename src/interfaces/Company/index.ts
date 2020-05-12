import { IUser } from "$interfaces/User";

export interface ICompany {
  uuid: string;
  user: IUser;
  cuit: string;
  companyName: string;
  slogan?: string;
  description?: string;
  logo?: string;
  website?: string;
  email?: string;
  phoneNumbers?: string[];
  photos?: string[];
}
