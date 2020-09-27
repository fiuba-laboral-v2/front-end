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

export interface ICreateOrUpdateOffer {
  title: string;
  description: string;
  hoursPerDay: number;
  minimumSalary: number;
  maximumSalary: number;
  targetApplicantType: ApplicantType | "";
}

export interface IOffer extends ICreateOrUpdateOffer {
  uuid: string;
  company: ICompany;
  targetApplicantType: ApplicantType;
  graduadosApprovalStatus: ApprovalStatus;
  extensionApprovalStatus: ApprovalStatus;
  createdAt: string;
  updatedAt: string;
  sections?: IOfferSection[];
  careers?: ICareer[];
}
