export interface ICareer {
  code: string;
  description: string;
  credits: number;
  creditsCount?: number;
}

export interface ICapability {
  description: string;
}

export interface IApplicant {
  name: string;
  surname: string;
  padron: number;
  description: string;
  capabilities?: ICapability[];
  careers?: ICareer[];
}
