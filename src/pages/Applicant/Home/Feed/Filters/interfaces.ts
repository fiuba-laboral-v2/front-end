import { ICareer } from "$interfaces/Career";
import { OfferFilter } from "$models/SearchFilters/OfferFilter";
import { IOfferListTranslations } from "../interfaces";

export interface IFiltersContainerProps {
  className?: string;
  translations?: IOfferListTranslations;
  filter: OfferFilter;
}

export interface IFiltersProps extends IFiltersContainerProps {
  filter: OfferFilter;
  careers: ICareer[];
}
