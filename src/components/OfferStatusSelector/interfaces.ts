import { ISelectFieldOption } from "$components/Fields/SelectField";
import { OfferStatus } from "$interfaces/Offer";

interface ICommonProps {
  mandatory?: boolean;
  name: string;
  className?: string;
}

export interface IContainerProps extends ICommonProps {
  withEmptyOption?: boolean;
}

export interface ITranslations {
  title: string;
  approved: string;
  rejected: string;
  pending: string;
  expired: string;
}

export interface IComponentProps extends ICommonProps {
  translations: ITranslations;
  options: Array<ISelectFieldOption<OfferStatus>>;
}
