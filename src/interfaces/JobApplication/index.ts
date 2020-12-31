import { IApplicant } from "$interfaces/Applicant";
import { IOffer, IOfferAttributes } from "$interfaces/Offer";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { Secretary } from "../Secretary";

interface ICommonAttributes {
  uuid: string;
  updatedAt: string;
  createdAt: string;
  approvalStatus: ApprovalStatus;
  applicant: IApplicant;
}

export interface IJobApplicationAttributes extends ICommonAttributes {
  offer: IOfferAttributes;
}

export interface IJobApplication extends ICommonAttributes {
  offer: () => IOffer;
  hasAnApprovedApplicant: () => boolean;
  hasAnApprovedOffer: (secretary: Secretary) => boolean;
}
