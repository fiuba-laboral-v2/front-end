import { IUseApplicantsFilter } from "$hooks";
import { ApplicantsFilter } from "$models/ApplicantsFilter";

export interface IContainerProps {
  filter: ApplicantsFilter;
}

export interface IFormValues extends IUseApplicantsFilter {
  _form: string;
}
