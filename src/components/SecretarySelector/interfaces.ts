export interface IContainerProps {
  mandatory: boolean;
}

export interface IInstitutionsTranslations {
  extension: string;
  graduados: string;
}

export interface ITitleTranslations {
  title: string;
}

export type ITranslations = IInstitutionsTranslations & ITitleTranslations;

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
}
