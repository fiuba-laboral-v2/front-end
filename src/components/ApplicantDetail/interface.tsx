export interface ICareer {
  code: string;
  description: string;
  credits: number;
}

export interface ICapability {
  description: string;
}

export interface ITranslations {
  padron: string;
  capabilities: string;
  careers: string;
  credits: string;
}

export interface IApplicantDetailProps {
  name: string;
  surname: string;
  padron: number;
  description: string;
  careers?: string[];
  capabilities?: string[];
  translations: ITranslations;
}
