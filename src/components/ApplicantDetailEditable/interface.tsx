import { ICareer, ICapability, ITranslations } from "$components/ApplicantDetail/interface";

export interface IApplicant {
  name: string;
  surname: string;
  padron: number;
  description: string;
  capabilities?: ICapability[];
  careers?: ICareer[];
}

export interface IApplicantDetailEditableProps {
  applicant: IApplicant;
  translations: ITranslations;
  onSubmit: (applicant: IApplicant) => void;
  onCancel: () => void;
}
