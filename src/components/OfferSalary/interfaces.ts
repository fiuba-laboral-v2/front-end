import { IOffer } from "$interfaces/Offer";

export interface IOfferSalaryContainerProps {
  offer?: IOffer;
  className?: string;
}

export interface IOfferSalaryTranslations {
  salaryTitle: string;
  salaryFrom: string;
  salaryTo: string;
}

export interface IOfferSalaryProps extends IOfferSalaryContainerProps {
  offer: IOffer;
  translations: IOfferSalaryTranslations;
}
