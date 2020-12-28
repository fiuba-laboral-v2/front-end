interface IInfoMessageCommonProps {
  className?: string;
}

export interface IInfoMessageContainerProps extends IInfoMessageCommonProps {
  translationGroupName: string;
}

export interface IInfoMessageProps extends IInfoMessageCommonProps, ITranslations {}

export interface ITranslations {
  message?: string;
}
