import { IApplicantCareer } from "$interfaces/Applicant";
import { ICompany } from "$interfaces/Company";
import { ApprovalStatus } from "../ApprovalStatus";

export enum TargetApplicantType {
  graduate = "graduate",
  student = "student",
  both = "both"
}

export const targetApplicantTypeEnumValues = [
  TargetApplicantType.graduate,
  TargetApplicantType.student,
  TargetApplicantType.both
];

export interface IOfferSection {
  uuid?: string;
  title: string;
  text: string;
  displayOrder: number;
}

export interface IOffer {
  uuid: string;
  company: ICompany;
  title: string;
  description: string;
  targetApplicantType: TargetApplicantType;
  hoursPerDay: number;
  minimumSalary: number;
  maximumSalary: number;
  graduadosApprovalStatus: ApprovalStatus;
  extensionApprovalStatus: ApprovalStatus;
  createdAt: string;
  updatedAt: string;
  sections?: IOfferSection[];
  careers?: IApplicantCareer[];
}
