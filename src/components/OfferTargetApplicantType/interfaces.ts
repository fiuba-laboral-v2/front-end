import { IOffer } from "$interfaces/Offer";

export interface IContainerProps {
  className?: string;
  offer: IOffer;
}

export interface ITranslations {
  title: string;
  graduate: string;
  student: string;
  both: string;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
}
