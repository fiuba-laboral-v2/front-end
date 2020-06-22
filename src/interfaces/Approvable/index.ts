export interface IApprovableCompany {
  __typename: "Company";
  uuid: string;
  companyName: string;
}

export type IApprovable = IApprovableCompany;
