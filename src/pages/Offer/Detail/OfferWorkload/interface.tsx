import { IOffer } from "$interfaces/Offer";

export interface IOfferWorkloadContainerProps {
  offer: IOffer;
  className?: string;
}

interface IOfferWorkloadTranslations {
  title: string;
  hoursPerDay: string;
}

export interface IOfferWorkloadComponentProps extends IOfferWorkloadContainerProps {
  translations: IOfferWorkloadTranslations;
}
