export interface IApplicantDetailProps {
  name: string;
  surname: string;
  padron: IPadron;
  description: string;
  credits: ICredits;
  careers?: ICareers;
  capabilities?: ICapabilities;
}

export interface IPadron {
  value: number;
  translation: string;
}

export interface ICapabilities {
  value: string[];
  translation: string;
}

export interface ICareers {
  value: string[];
  translation: string;
}

export interface ICredits {
  value: number;
  translation: string;
}
