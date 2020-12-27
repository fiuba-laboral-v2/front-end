import { IButtonProps } from "../Button";

export interface IEmptyListCommonProps {
  onClick?: () => void;
  buttonKind: IButtonProps["kind"];
  className?: string;
  link?: string;
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
