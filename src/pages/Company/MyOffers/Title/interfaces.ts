import { CompanyOffersFilter } from "$models/SearchFilters/CompanyOffersFilter";

export interface ITranslations {
  title: string;
  hideRejectedAndExpiredOffers: string;
}

export interface IContainerProps {
  filter: CompanyOffersFilter;
}

export interface IComponentProps extends IContainerProps {
  translations?: ITranslations;
  onClick: () => void;
}