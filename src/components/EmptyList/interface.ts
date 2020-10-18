export interface IEmptyListCommonProps {
  onClick: () => void;
  buttonKind: "primary" | "secondary" | "warning" | "danger";
}

export interface IEmptyListContainerProps extends IEmptyListCommonProps {
  emptyTranslationSource: string;
}

export interface IEmptyListProps extends IEmptyListCommonProps {
  translations: ITranslations;
}

export interface ITranslations {
  text: string;
  button: string;
}
