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

export interface IApplicantEditable {
  padron: number;
  name?: string;
  surname?: string;
  description?: string;
  capabilities?: string[];
  careers?: ICareer[];
}
