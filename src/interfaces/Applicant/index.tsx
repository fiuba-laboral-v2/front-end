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

export interface ISection {
  title: string;
  text: string;
}

export interface IApplicant {
  uuid: string;
  name: string;
  surname: string;
  padron: number;
  description: string;
  links?: string[];
  sections?: ISection[];
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
