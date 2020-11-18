export interface ITranslations {
  title: string;
  fiubaLogin: string;
  companyLogin: string;
}

export interface IComponentProps {
  loginAsFiubaUser: () => void;
  loginAsCompanyUser: () => void;
  translations?: ITranslations;
}
