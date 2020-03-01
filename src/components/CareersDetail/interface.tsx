export interface ICareer {
  code: string;
  description: string;
  credits: number;
  creditsCount?: number;
}

export interface ICareersProps {
  careers?: ICareer[];
  capabilitiesTitle: string;
  creditsTitle: string;
}
