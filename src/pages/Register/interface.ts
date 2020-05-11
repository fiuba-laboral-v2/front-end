export interface IRegisterTranslations {
  registerAsApplicant: string;
  registerAsCompany: string;
}

export const defaultTranslations: IRegisterTranslations = {
  registerAsApplicant: "register.registerAsApplicant",
  registerAsCompany: "register.registerAsCompany"
};

export interface IRegisterProps {
  onClickRegisterApplicant: () => void;
  onClickRegisterCompany: () => void;
  translations: IRegisterTranslations;
}
