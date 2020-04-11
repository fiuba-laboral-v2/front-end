import { IOffer } from "../../../../interfaces/Offer";

export interface IOfferSalaryContainerProps {
  offer: IOffer;
  className?: string;
}

interface ITranslations {
  title: string;
  salaryFromTranslation: string;
  salaryToTranslation: string;
}

export interface IOfferSalaryComponentProps extends IOfferSalaryContainerProps {
  translations: ITranslations;
}
