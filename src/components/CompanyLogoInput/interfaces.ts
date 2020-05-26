export interface ICompanyLogoInputContainerProps {
  initialValue?: string;
  setLogo: (logo: string) => void;
  className?: string;
}

export interface ICompanyLogoInputTranslations {
  uploadLogo: string;
}

export interface ICompanyLogoInputProps extends ICompanyLogoInputContainerProps {
  translations: ICompanyLogoInputTranslations;
}
