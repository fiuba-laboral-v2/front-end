import { ITranslations } from "$components/ApplicantDetail/interface";
import { IApplicant, IApplicantEditable } from "$interfaces/Applicant";

export interface IApplicantDetailEditableProps {
  applicant: IApplicant;
  state: IApplicantEditable;
  translations: ITranslations;
  onSubmit: (applicant: IApplicantEditable) => void;
  onCancel: () => void;
  setState: (applicant: IApplicantEditable) => void;
}
