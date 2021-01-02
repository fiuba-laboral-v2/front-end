export interface ITranslations {
  edit: string;
  editPadron: string;
}

export interface IContainerProps {
  className?: string;
}

export interface IComponentProps extends IContainerProps {
  translations?: ITranslations;
  editLink: string;
  editPadronLink: string;
}
