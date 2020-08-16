import { IApplicantCareer } from "$interfaces/Applicant";

export interface ICareerTranslations {
  careersTitle: string;
  approvedSubjectCount: string;
  currentCareerYear: string;
  isGraduate: string;
}

export interface ICareersProps {
  careers: IApplicantCareer[];
  buildLabel: (applicantCareer: IApplicantCareer) => string;
  className?: string;
  translations: ICareerTranslations;
}

export interface ICareersContainerProps {
  careers: IApplicantCareer[];
  className?: string;
}
