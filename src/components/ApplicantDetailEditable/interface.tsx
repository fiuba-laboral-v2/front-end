import { ITranslations } from "$components/ApplicantDetail/interface";
import { IApplicant } from "$interfaces/Applicant";

export interface IApplicantDetailEditableProps {
  applicant: IApplicant;
  translations: ITranslations;
  onSubmit: (applicant: IApplicant) => void;
  onCancel: () => void;
}
