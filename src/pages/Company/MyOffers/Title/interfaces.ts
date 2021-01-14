import { CompanyOffersFilter } from "$models/SearchFilters/CompanyOffersFilter";
import { IUseMyOffersFilter } from "$hooks";

export interface ITranslations {
  title: string;
  hideRejectedAndExpiredOffers: string;
}

interface ICommonProps {
  className?: string;
  filter: CompanyOffersFilter;
}

export interface IContainerProps extends ICommonProps {
  refetchOffers?: (filter: IUseMyOffersFilter) => void;
}

export interface IComponentProps extends ICommonProps {
  translations?: ITranslations;
  onClick: () => void;
}
