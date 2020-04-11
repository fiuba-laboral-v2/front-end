import { IOffer } from "$interfaces/Offer";

export interface IOfferWorkloadContainerProps {
  offer: IOffer;
  className?: string;
}

interface ITranslations {
  title: string;
  hoursPerDayTranslation: string;
}

export interface IOfferWorkloadComponentProps extends IOfferWorkloadContainerProps {
  translations: ITranslations;
}
