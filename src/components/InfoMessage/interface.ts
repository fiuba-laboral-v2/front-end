interface IInfoMessageCommonProps {
  className?: string;
}

export interface IInfoMessageContainerProps extends IInfoMessageCommonProps {
  translationName: string;
}

export interface IInfoMessageProps extends IInfoMessageCommonProps, ITranslations {}

export interface ITranslations {
  message: string;
}
