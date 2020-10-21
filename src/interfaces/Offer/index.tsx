import { ApplicantType, ISection } from "$interfaces/Applicant";
import { ICompany } from "$interfaces/Company";
import { ApprovalStatus } from "../ApprovalStatus";
import { ICareer } from "../Career";

export interface ICreateOffer {
  title: string;
  description: string;
  hoursPerDay: number;
  minimumSalary: number;
  maximumSalary: number;
  targetApplicantType: ApplicantType | "";
  careers: ICareer[];
  sections: ISection[];
}

export interface IUpdateOffer extends ICreateOffer {
  uuid: string;
}

export interface IOffer extends ICreateOffer {
  uuid: string;
  company: ICompany;
  targetApplicantType: ApplicantType;
  graduadosApprovalStatus: ApprovalStatus;
  extensionApprovalStatus: ApprovalStatus;
  createdAt: string;
  updatedAt: string;
}
