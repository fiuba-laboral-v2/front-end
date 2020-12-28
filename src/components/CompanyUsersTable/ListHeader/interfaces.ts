export interface ITranslations {
  name: string;
  email: string;
  position: string;
  createdAt: string;
  actions: string;
}

export interface IContainerProps {
  withoutActions?: boolean;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
}
