interface ICareer {
  name: string;
  credits: number;
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
  careers?: ICareer[];
  capabilities?: string[];
  translations: ITranslations;
}
