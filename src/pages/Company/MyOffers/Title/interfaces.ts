import { CompanyOffersFilter } from "$models/SearchFilters/CompanyOffersFilter";
import { IUseMyOffersFilter } from "$hooks";

export interface ITranslations {
  title: string;
  hideRejectedAndExpiredOffers: string;
}

interface ICommonProps {
  className?: string;
}

export interface IContainerProps extends ICommonProps {
  refetchOffers?: (filter: IUseMyOffersFilter) => void;
  filter: CompanyOffersFilter;
}

export interface IComponentProps extends ICommonProps {
  translations?: ITranslations;
  onChange: () => void;
  disabled: boolean;
  checked: boolean;
}
