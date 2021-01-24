import { ICreateOfferValues } from "$interfaces/Offer";
import { ICompany } from "$interfaces/Company";

export interface ITranslations {
  offerTitle: string;
  minimumSalary: string;
  maximumSalary: string;
  hoursPerDay: string;
  description: string;
  isInternship: string;
}

export interface IContainerProps {
  company?: ICompany;
  autoFocus?: boolean;
  className?: string;
  values: ICreateOfferValues;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
}
