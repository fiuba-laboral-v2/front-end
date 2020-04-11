import { IOffer } from "$interfaces/Offer";

export interface IOfferWorkloadContainerProps {
  offer: IOffer;
  className?: string;
}

export interface IOfferWorkloadComponentProps extends IOfferWorkloadContainerProps {
  title: string;
  hoursPerDayTranslation: string;
}
