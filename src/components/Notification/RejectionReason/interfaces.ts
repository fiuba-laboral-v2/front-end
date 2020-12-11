export interface ITranslations {
  reason: string;
  contactModerator: string;
}

export interface IContainerProps {
  className?: string;
  moderatorEmail: string;
  message: string;
}

export interface IComponentProps extends IContainerProps {
  translations?: ITranslations;
}
