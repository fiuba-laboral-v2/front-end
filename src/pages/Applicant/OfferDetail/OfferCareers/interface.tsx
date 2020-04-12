import { IOffer } from "$interfaces/Offer";

export interface IOfferCareersContainerProps {
  offer: IOffer;
  className?: string;
}

export interface IOfferCareersComponentProps extends IOfferCareersContainerProps {
  title: string;
}
