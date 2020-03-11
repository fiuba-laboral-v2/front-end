export interface ICareer {
  code: string;
  description: string;
  credits: number;
  creditsCount?: number;
}

export interface ICapability {
  uuid: string;
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

export interface IApplicantCareer {
  code: string;
  creditsCount: number;
}


export interface IApplicantEditable {
  padron: number;
  name?: string;
  surname?: string;
  description?: string;
  capabilities?: string[];
  careers?: IApplicantCareer[];
}
