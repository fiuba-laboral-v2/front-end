export interface ITranslations {
  companyName: string;
  slogan: string;
  description: string;
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
