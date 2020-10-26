export interface IRegisterTranslations {
  title: string;
  fiubaLogin: string;
  companyLogin: string;
}

export interface IRegisterProps {
  loginAsFiubaUser: () => void;
  loginAsCompanyUser: () => void;
  translations: IRegisterTranslations;
}
