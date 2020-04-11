import { IOffer } from "../../../../interfaces/Offer";

export interface IOfferSalaryContainerProps {
  offer: IOffer;
  className?: string;
}

interface ITranslations {
  salaryFromTranslation: string;
  salaryToTranslation: string;
}

export interface IOfferSalaryComponentProps extends IOfferSalaryContainerProps {
  title: string;
  translations: ITranslations;
}
