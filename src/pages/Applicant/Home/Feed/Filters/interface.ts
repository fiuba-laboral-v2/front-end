import { ICareer } from "$interfaces/Career";
import { OfferFilter } from "$models/OfferFilter";
import { IOfferListTranslations } from "../interface";

export interface IFiltersContainerProps {
  className?: string;
  translations?: IOfferListTranslations;
}

export interface IFiltersProps extends IFiltersContainerProps {
  filter: OfferFilter;
  careers: ICareer[];
}
