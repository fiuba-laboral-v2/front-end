export interface ITranslations {
  enterAsAdmin: string;
  enterAsApplicant: string;
}

export interface IContainerProps {
  className?: string;
}

export interface IComponentProps extends IContainerProps {
  onClick: () => void;
  label: string;
}
