import { ISelectFieldOption } from "$components/Fields/SelectField";
import { OfferStatus } from "$interfaces/Offer";

interface ICommonProps {
  mandatory?: boolean;
  name: string;
  className?: string;
}

export type AdditionalOptions = "indeterminate";

export interface IContainerProps {
  mandatory?: boolean;
  name: string;
  className?: string;
  target: "students" | "graduates";
  additionalOptions?: AdditionalOptions[];
}

export interface ITranslations {
  studentsTitle: string;
  graduatesTitle: string;
  approved: string;
  rejected: string;
  pending: string;
  expired: string;
  indeterminate: string;
}

export interface IComponentProps extends ICommonProps {
  title: string;
  options: Array<ISelectFieldOption<OfferStatus | AdditionalOptions>>;
}
