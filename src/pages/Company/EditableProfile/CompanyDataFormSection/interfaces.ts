export interface ITranslations {
  companyName: string;
  slogan: string;
  description: string;
  businessSector: string;
  companyLogoInputTooltipMessage: string;
}

export interface IContainerProps {
  className?: string;
  initialLogo?: string;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
  className?: string;
}
