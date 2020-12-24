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

export interface IOffer extends IOfferAttributes {
  hasExpiredFor: (secretary: Secretary) => boolean;
  getExpirationDateFor: (secretary: Secretary) => Moment | null;
  isRejectedFor: (secretary: Secretary) => boolean;
  isTargetingStudents: () => boolean;
  isTargetingGraduates: () => boolean;
  isTargetingBoth: () => boolean;
}
