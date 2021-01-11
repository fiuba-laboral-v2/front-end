import { ApplicantType } from "$interfaces/Applicant";
import { ISelectFieldOption } from "$components/Fields/SelectField";

interface ICommonProps {
  mandatory?: boolean;
  name: string;
  label?: string;
  className?: string;
}

export type AdditionalOptions = "indeterminate";

export interface IContainerProps extends ICommonProps {
  excludedOptions?: ApplicantType[];
  additionalOptions?: AdditionalOptions[];
}

export interface ITranslations {
  title: string;
  graduate: string;
  student: string;
  both: string;
  indeterminate: string;
}

export interface IComponentProps extends ICommonProps {
  translations: ITranslations;
  options: Array<ISelectFieldOption<ApplicantType | AdditionalOptions>>;
}
