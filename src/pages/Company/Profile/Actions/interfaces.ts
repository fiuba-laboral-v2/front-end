export interface ITranslations {
  edit: string;
  editCuitAndBusinessName: string;
}

export interface IContainerProps {
  className?: string;
}

export interface IComponentProps extends IContainerProps {
  translations?: ITranslations;
  editLink: string;
  editCriticalAttributesLink: string;
}
