import { IUseJobApplicationsFilter } from "$hooks";
import { JobApplicationsFilter } from "$models/SearchFilters/JobApplicationsFilter";

export interface ITranslations {
  companyName: string;
  applicantName: string;
  offerTitle: string;
}

export interface IContainerProps {
  showFilter: boolean;
  filter: JobApplicationsFilter;
  refetchJobApplications?: (filter: IUseJobApplicationsFilter) => void;
}

export interface IFormValues extends Required<IUseJobApplicationsFilter> {
  _form: string;
}
