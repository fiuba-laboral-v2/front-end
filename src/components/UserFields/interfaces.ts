export interface IUserFieldsTranslations {
  email: string;
  name: string;
  surname: string;
}

export interface IUserFieldsContainerProps {
  email: string;
  name: string;
  surname: string;
}

export interface IUserFieldsProps extends IUserFieldsContainerProps {
  translations: IUserFieldsTranslations;
}
