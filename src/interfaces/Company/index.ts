export interface ICompany {
  uuid: string;
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
