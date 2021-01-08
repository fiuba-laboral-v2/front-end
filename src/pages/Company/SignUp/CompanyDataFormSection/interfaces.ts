export interface ITranslations {
  title: string;
  companyName: string;
  slogan: string;
  description: string;
  businessName: string;
  businessSector: string;
  cuit: string;
}

export interface IContainerProps {
  className?: string;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
  className?: string;
}
