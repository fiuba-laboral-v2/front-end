import { ApplicantType } from "$interfaces/Applicant";
import { ISelectFieldOption } from "$components/Fields/SelectField";

interface ICommonProps {
  mandatory?: boolean;
  name: string;
  label?: string;
  className?: string;
}

export interface IContainerProps extends ICommonProps {
  excludedOptions?: ApplicantType[];
}

export interface ITranslations {
  title: string;
  graduate: string;
  student: string;
  both: string;
}

export interface IComponentProps extends ICommonProps {
  translations: ITranslations;
  options: Array<ISelectFieldOption<ApplicantType>>;
}
