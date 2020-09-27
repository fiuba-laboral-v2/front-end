import { ApplicantType } from "$interfaces/Applicant";
import { ICompany } from "$interfaces/Company";
import { ApprovalStatus } from "../ApprovalStatus";
import { ICareer } from "../Career";

export interface IOfferSection {
  uuid?: string;
  title: string;
  text: string;
  displayOrder: number;
}

export interface IOffer<Company = ICompany> {
  uuid: string;
  company: Company;
  title: string;
  description: string;
  targetApplicantType: ApplicantType;
  hoursPerDay: number;
  minimumSalary: number;
  maximumSalary: number;
  graduadosApprovalStatus: ApprovalStatus;
  extensionApprovalStatus: ApprovalStatus;
  createdAt: string;
  updatedAt: string;
  sections?: IOfferSection[];
  careers?: ICareer[];
}
