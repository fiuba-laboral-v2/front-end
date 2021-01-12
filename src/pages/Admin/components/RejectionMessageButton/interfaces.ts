export interface ITranslations {
  label: string;
}

export interface IContainerProps {
  useRejectionMessage: (uuid: string) => string | undefined;
}

export interface IComponentProps {
  label?: ITranslations;
}
