import { ISelectFieldOption } from "$components/Fields/SelectField";
import { OfferStatus } from "$interfaces/Offer";

interface ICommonProps {
  mandatory?: boolean;
  name: string;
  className?: string;
}

export interface IContainerProps extends ICommonProps {
  withEmptyOption?: boolean;
  target: "students" | "graduates";
}

export interface ITranslations {
  studentsTitle: string;
  graduatesTitle: string;
  approved: string;
  rejected: string;
  pending: string;
  expired: string;
}

export interface IComponentProps extends ICommonProps {
  title: string;
  options: Array<ISelectFieldOption<OfferStatus>>;
}
