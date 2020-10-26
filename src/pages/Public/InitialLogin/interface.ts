export interface IRegisterTranslations {
  title: string;
  fiubaLogin: string;
  companyLogin: string;
}

export interface IRegisterProps {
  onClickRegisterApplicant: () => void;
  onClickRegisterCompany: () => void;
  translations: IRegisterTranslations;
}
