import { PossibleTypesMap } from "@apollo/client";

export const possibleTypes: PossibleTypesMap = {
  AdminTask: ["Company", "Applicant", "Offer", "JobApplication"],
  CompanyNotification: ["NewJobApplicationCompanyNotification", "ApprovedOfferCompanyNotification"],
  ApplicantNotification: [
    "ApprovedJobApplicationApplicantNotification",
    "RejectedJobApplicationApplicantNotification"
  ]
};
