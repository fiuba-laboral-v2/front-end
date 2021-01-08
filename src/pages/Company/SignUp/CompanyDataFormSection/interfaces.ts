export interface ITranslations {
  title: string;
  companyName: string;
  slogan: string;
  description: string;
  businessName: string;
  businessSector: string;
  hasAnInternshipAgreement: string;
  cuit: string;
}

export interface IContainerProps {
  className?: string;
  hasAnInternshipAgreementValue: boolean;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
  className?: string;
}
