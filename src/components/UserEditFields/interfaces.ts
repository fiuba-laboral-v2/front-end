export interface IUserEditFieldsTranslations {
  name: string;
  surname: string;
}

export interface IUserEditFieldsContainerProps {
  className: string;
  name: string;
  surname: string;
}

export interface IUserEditFieldsProps extends IUserEditFieldsContainerProps {
  translations: IUserEditFieldsTranslations;
}
