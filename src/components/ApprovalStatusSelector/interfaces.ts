import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ISelectFieldOption } from "$components/Fields/SelectField";

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
}

export interface IComponentProps extends ICommonProps {
  translations: ITranslations;
  options: Array<ISelectFieldOption<ApprovalStatus>>;
}
