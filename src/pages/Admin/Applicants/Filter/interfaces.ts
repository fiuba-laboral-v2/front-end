import { IUseApplicantsFilter } from "$hooks";
import { ApplicantsFilter } from "$models/ApplicantsFilter";
import { ApplicantType } from "$interfaces/Applicant";
import { ICareer } from "$interfaces/Career";
import { FormikHelpers } from "formik";

export interface ITranslations {
  name: string;
  submit: string;
}

export interface IContainerProps {
  filter: ApplicantsFilter;
  refetchApplicants?: (filter: IUseApplicantsFilter) => void;
}

export interface IFormValues {
  name: string;
  careers: ICareer[];
  applicantType: ApplicantType;
  _form: string;
}

export interface IComponentProps {
  translations?: ITranslations;
  initialValuesModel: ApplicantsFilter;
  modelToValues: (filter?: ApplicantsFilter) => IFormValues;
  onSubmit: (values: IFormValues, formikHelpers: FormikHelpers<IFormValues>) => Promise<any>;
}
