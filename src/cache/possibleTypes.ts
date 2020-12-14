import { PossibleTypesMap } from "@apollo/client";

export const possibleTypes: PossibleTypesMap = {
  AdminTask: ["Company", "Applicant", "Offer", "JobApplication"],
  CompanyNotification: [
    "NewJobApplicationCompanyNotification",
    "ApprovedOfferCompanyNotification",
    "RejectedOfferCompanyNotification",
    "ApprovedProfileCompanyNotification"
  ],
  ApplicantNotification: [
    "ApprovedJobApplicationApplicantNotification",
    "RejectedJobApplicationApplicantNotification",
    "ApprovedProfileApplicantNotification",
    "RejectedProfileApplicantNotification"
  ]
};
