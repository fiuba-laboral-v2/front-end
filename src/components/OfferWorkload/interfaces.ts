import { IOffer } from "$interfaces/Offer";

export interface IOfferWorkloadContainerProps {
  offer?: IOffer;
  className?: string;
}

export interface IOfferWorkloadTranslations {
  title: string;
  hoursPerDay: string;
}

export interface IOfferWorkloadComponentProps extends IOfferWorkloadContainerProps {
  translations: IOfferWorkloadTranslations;
  offer: IOffer;
}
