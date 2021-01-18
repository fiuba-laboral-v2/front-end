import { ApplicantType } from "$interfaces/Applicant";
import { ISection } from "$interfaces/Section";
import { ICompany } from "$interfaces/Company";
import { ApprovalStatus } from "../ApprovalStatus";
import { ICareer } from "../Career";
import { Secretary } from "../Secretary";
import { Moment } from "moment";

export interface ICareerInput {
  careerCode: string;
}

interface IBaseOfferAttributes {
  title: string;
  description: string;
  hoursPerDay: number;
  isInternship: boolean;
  minimumSalary: number;
  maximumSalary: number;
  targetApplicantType: ApplicantType | "";
}

export interface ICreateOfferValues extends IBaseOfferAttributes {
  careers: ICareer[];
  sections: ISection[];
  _form: string[];
}

export interface ICreateOffer extends IBaseOfferAttributes {
  careers: ICareerInput[];
  sections: ISection[];
}

export interface IEditOffer extends ICreateOffer {
  uuid: string;
}

export interface IOfferAttributes extends ICreateOfferValues {
  uuid: string;
  company: ICompany;
  targetApplicantType: ApplicantType;
  graduadosApprovalStatus: ApprovalStatus;
  extensionApprovalStatus: ApprovalStatus;
  graduatesExpirationDateTime: string | null;
  studentsExpirationDateTime: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface IMyOfferAttributes extends IOfferAttributes {
  hasApplied: boolean;
}

export type IOffer<T = IOfferAttributes> = T & {
  hasExpiredFor: (secretary: Secretary) => boolean;
  getExpirationDateFor: (secretary: Secretary) => Moment | null;
  getStatusFor: (secretary: Secretary) => ApprovalStatus | undefined;
  isRejectedFor: (secretary: Secretary) => boolean;
  isApprovedFor: (secretary: Secretary) => boolean;
  isTargetingOnlyStudents: () => boolean;
  isTargetingOnlyGraduates: () => boolean;
  isTargetingStudents: () => boolean;
  isTargetingGraduates: () => boolean;
  isTargetingBoth: () => boolean;
  canExpireForStudents: () => boolean;
  canExpireForGraduates: () => boolean;
  canRepublishForStudents: () => boolean;
  canRepublishForGraduates: () => boolean;
  isStudentExpirationGreaterOrEqualThanGraduates: () => boolean;
  isFromApprovedCompany: () => boolean;
};

export enum OfferStatus {
  expired = "expired",
  pending = "pending",
  approved = "approved",
  rejected = "rejected"
}

export const offerStatusEnumValues = [
  OfferStatus.approved,
  OfferStatus.pending,
  OfferStatus.rejected,
  OfferStatus.expired
];
