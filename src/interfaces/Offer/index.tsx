import { ApplicantType } from "$interfaces/Applicant";
import { ISection } from "$interfaces/Section";
import { ICompany } from "$interfaces/Company";
import { ApprovalStatus } from "../ApprovalStatus";
import { ICareer } from "../Career";

export interface ICareerInput {
  careerCode: string;
}

export interface IOfferAttributes {
  title: string;
  description: string;
  hoursPerDay: number;
  minimumSalary: number;
  maximumSalary: number;
  targetApplicantType: ApplicantType | "";
}

export interface ICreateOfferValues extends IOfferAttributes {
  careers: ICareer[];
  sections: ISection[];
}

export interface ICreateOffer extends IOfferAttributes {
  careers: ICareerInput[];
  sections: ISection[];
}

export interface IEditOffer extends ICreateOffer {
  uuid: string;
}

export interface IOffer extends ICreateOfferValues {
  uuid: string;
  company: ICompany;
  targetApplicantType: ApplicantType;
  graduadosApprovalStatus: ApprovalStatus;
  extensionApprovalStatus: ApprovalStatus;
  createdAt: string;
  updatedAt: string;
}
