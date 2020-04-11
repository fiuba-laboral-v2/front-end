import { IOffer } from "../../../../interfaces/Offer";

export interface IOfferSalaryContainerProps {
  offer: IOffer;
  className?: string;
}

export interface IOfferSalaryComponentProps extends IOfferSalaryContainerProps {
  title: string;
  salaryFromTranslation: string;
  salaryToTranslation: string;
}
