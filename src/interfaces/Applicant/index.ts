import { IFiubaUser } from "../User";
import { ICapability } from "../Capability";
import { ICareer } from "../Career";
import { IOffer } from "../Offer";
import { ApprovalStatus } from "../ApprovalStatus";

export enum ApplicantType {
  graduate = "graduate",
  student = "student",
  both = "both"
}

export const targetApplicantTypeEnumValues = [
  ApplicantType.graduate,
  ApplicantType.student,
  ApplicantType.both
];

export interface IApplicantCareer {
  career: ICareer;
  approvedSubjectCount?: number;
  currentCareerYear?: number;
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
  user: IFiubaUser;
  createdAt: string;
  updatedAt: string;
  padron: number;
  approvalStatus: ApprovalStatus;
  description?: string;
  links: ILink[];
  sections: ISection[];
  capabilities: ICapability[];
  careers: IApplicantCareer[];
}

export interface IApplicantCareerInput {
  careerCode: string;
  approvedSubjectCount?: number;
  currentCareerYear?: number;
  isGraduate: boolean;
}

export interface IMyOffer extends IOffer {
  hasApplied: boolean;
}
