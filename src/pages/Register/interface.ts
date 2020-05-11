export interface IRegisterTranslations {
  registerAsApplicant: string;
  registerAsCompany: string;
}

export interface IRegisterProps {
  onClickRegisterApplicant: () => void;
  onClickRegisterCompany: () => void;
  translations: IRegisterTranslations;
}
