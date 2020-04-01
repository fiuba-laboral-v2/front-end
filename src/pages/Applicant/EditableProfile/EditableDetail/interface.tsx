import { IApplicant } from "$interfaces/Applicant";

export interface IApplicantDetailEditableProps {
  applicant: IApplicant;
  onSubmit: (applicant: IApplicant) => void;
  setApplicant: (applicant: IApplicant) => void;
  deleteCapability: (description: string) => void;
  deleteCareer: (code: string) => void;
  loading: boolean;
}
