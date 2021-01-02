import { IJobApplicationAttributes } from "$interfaces/JobApplication";
import { Offer } from "$models/Offer";
import { ApprovalStatus } from "../interfaces/ApprovalStatus";
import { Secretary } from "../interfaces/Secretary";

export const JobApplication = (attributes: IJobApplicationAttributes) => {
  const jobApplication = {
    ...attributes,
    offer: () => Offer(attributes.offer),
    hasAnApprovedApplicant: () => attributes.applicant.approvalStatus === ApprovalStatus.approved,
    hasAnApprovedOffer: (secretary: Secretary) => jobApplication.offer().isApprovedFor(secretary)
  };

  return jobApplication;
};
