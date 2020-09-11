import { ICareer } from "$interfaces/Career";
import { OfferFilter } from "$models/OfferFilter";

export interface IFiltersContainerProps {
  className?: string;
}

export interface IFiltersProps extends IFiltersContainerProps {
  filter: OfferFilter;
  careers: ICareer[];
}
