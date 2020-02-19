interface IPadron {
  value: number;
  translation: string;
}

interface ICapabilities {
  value: string[];
  translation: string;
}

interface ICareer {
  name: string;
  credits: number;
}

interface ITranslationCareer {
  careers: string;
  credits: number;
}

interface ICareers {
  value: ICareer[];
  translations: ITranslationCareer;
}

export interface IApplicantDetailProps {
  name: string;
  surname: string;
  padron: IPadron;
  description: string;
  careers?: ICareers;
  capabilities?: ICapabilities;
}
