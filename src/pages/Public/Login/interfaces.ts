export interface ITranslations {
  title: string;
  fiubaLogin: string;
  companyLogin: string;
}

export interface IComponentProps {
  loginAsFiubaUserLink: string;
  loginAsCompanyUserLink: string;
  translations?: ITranslations;
}
