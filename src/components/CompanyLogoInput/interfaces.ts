export interface ICompanyLogoInputContainerProps {
  setLogo: (logo: string) => void;
  className?: string;
}

export interface ICompanyLogoInputTranslations {
  altImageText: string;
  uploadLogo: string;
}

export interface ICompanyLogoInputProps extends ICompanyLogoInputContainerProps {
  setLogo: (logo: string) => void;
  className?: string;
  translations: ICompanyLogoInputTranslations;
}
