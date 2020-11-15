import { IFiubaUser } from "../User";
import { ICapability } from "../Capability";
import { ICareer } from "../Career";
import { IOffer } from "../Offer";
import { ISection } from "../Section";
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

interface IBaseApplicantCareer {
  approvedSubjectCount?: number;
  currentCareerYear?: number;
  isGraduate: boolean;
}

export interface IApplicantCareer extends IBaseApplicantCareer {
  career: ICareer;
}

export interface IApplicantCareerInput extends IBaseApplicantCareer {
  careerCode: string;
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
  knowledgeSections: ISection[];
  experienceSections: ISection[];
  capabilities: ICapability[];
  careers: IApplicantCareer[];
}

export interface IMyOffer extends IOffer {
  hasApplied: boolean;
}
