import { IUser } from "../User";
import { ICapability } from "../Capability";
import { ICareer } from "../Career";
import { IOffer } from "../Offer";
import { ApprovalStatus } from "../ApprovalStatus";

export interface IApplicantCareer {
  career: ICareer;
  creditsCount: number;
  isGraduate: boolean;
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
  approvalStatus: ApprovalStatus;
  description?: string;
  links: ILink[];
  sections: ISection[];
  capabilities: ICapability[];
  careers: IApplicantCareer[];
}

export interface IApplicantCareerInput {
  code: string;
  creditsCount: number;
  isGraduate: boolean;
}

export interface IMyOffer extends IOffer {
  hasApplied: boolean;
}
