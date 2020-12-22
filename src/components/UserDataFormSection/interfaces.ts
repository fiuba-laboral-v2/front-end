export interface ITranslations {
  title: string;
  email: string;
  emailClarification: string;
  name: string;
  surname: string;
  password: string;
  passwordConfirm: string;
}

export interface IContainerProps {
  className?: string;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
  className?: string;
}
