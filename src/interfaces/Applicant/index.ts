import { IUser } from "../User";
import { ICapability } from "../Capability";
import { IOffer } from "../Offer";

export interface ICareer {
  code: string;
  description: string;
  credits: number;
  creditsCount: number;
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
  user: IUser;
  createdAt: string;
  padron: number;
  description?: string;
  links: ILink[];
  sections: ISection[];
  capabilities: ICapability[];
  careers: ICareer[];
}

export interface IApplicantCareer {
  code: string;
  creditsCount: number;
}

export interface IMyOffer extends IOffer {
  hasApplied: boolean;
}
