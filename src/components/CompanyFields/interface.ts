export interface ICompanyFieldsTranslations {
  cuit: string;
  companyName: string;
  email: string;
  slogan: string;
  description: string;
  website: string;
}

export interface ICompanyFieldsContainerProps {
  edit?: boolean;
}

export interface ICompanyFieldsProps extends ICompanyFieldsContainerProps {
  translations: ICompanyFieldsTranslations;
}
