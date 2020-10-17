export interface IEmptyListCommonProps {
  onClick: () => void;
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
