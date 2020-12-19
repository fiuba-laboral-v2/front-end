import { ApplicantType } from "$interfaces/Applicant";
import { ISection } from "$interfaces/Section";
import { ICompany } from "$interfaces/Company";
import { ApprovalStatus } from "../ApprovalStatus";
import { ICareer } from "../Career";
import { Secretary } from "../Secretary";

export interface ICareerInput {
  careerCode: string;
}

export interface IOfferAttributes {
  title: string;
  description: string;
  hoursPerDay: number;
  isInternship: boolean;
  minimumSalary: number;
  maximumSalary: number;
  targetApplicantType: ApplicantType | "";
}

export interface ICreateOfferValues extends IOfferAttributes {
  careers: ICareer[];
  sections: ISection[];
  _form: string[];
}

export interface ICreateOffer extends IOfferAttributes {
  careers: ICareerInput[];
  sections: ISection[];
}

export interface IEditOffer extends ICreateOffer {
  uuid: string;
}

export interface IPersistanceOffer extends ICreateOfferValues {
  uuid: string;
  company: ICompany;
  targetApplicantType: ApplicantType;
  graduadosApprovalStatus: ApprovalStatus;
  extensionApprovalStatus: ApprovalStatus;
  graduatesExpirationDateTime: string | null;
  studentsExpirationDateTime: string | null;
  createdAt: string;
  updatedAt: string;
  hasApplied?: boolean;
}

export interface IPersistanceMyOffer extends IPersistanceOffer {
  hasApplied: boolean;
}

export interface IOffer extends IPersistanceOffer {
  hasExpiredFor: (s: Secretary) => boolean;
  getExpirationDateFor: (s: Secretary) => string | null;
  isTargetToStudents: () => boolean;
  isTargetToGraduates: () => boolean;
  isTargetToBoth: () => boolean;
}
