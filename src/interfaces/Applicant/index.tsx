export interface ICareer {
  code: string;
  description: string;
  credits: number;
  creditsCount: number;
}

export interface ICapability {
  uuid?: string;
  description: string;
}

export interface ISection {
  uuid?: string;
  title: string;
  text: string;
  displayOrder: number;
}

export interface ILink {
  uuid?: string;
  name: string;
  url: string;
}

export interface IApplicant {
  uuid: string;
  name: string;
  surname: string;
  padron: number;
  description: string;
  links: ILink[];
  sections: ISection[];
  capabilities: ICapability[];
  careers: ICareer[];
}

export interface IApplicantCareer {
  code: string;
  creditsCount: number;
}
