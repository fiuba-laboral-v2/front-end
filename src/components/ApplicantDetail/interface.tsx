interface IPadron {
  value: number;
  translation: string;
}

interface ICapabilities {
  value: string[];
  translation: string;
}

interface ICareers {
  value: string[];
  translation: string;
}

interface ICredits {
  value: number;
  translation: string;
}

export interface IApplicantDetailProps {
  name: string;
  surname: string;
  padron: IPadron;
  description: string;
  credits: ICredits;
  careers?: ICareers;
  capabilities?: ICapabilities;
}
