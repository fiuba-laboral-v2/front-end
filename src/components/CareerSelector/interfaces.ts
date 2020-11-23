import { ICareer } from "$interfaces/Career";

export interface IContainerProps {
  className?: string;
  mandatory?: boolean;
  name: string;
}

export interface IComponentProps extends IContainerProps {
  translations?: ITranslations;
  options?: ICareer[];
}

export interface ITranslations {
  career: string;
}
