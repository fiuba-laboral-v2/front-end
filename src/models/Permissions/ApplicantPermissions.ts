import { RoutesBuilder } from "$models/RoutesBuilder";
import { TCurrentApplicant } from "../CurrentApplicant";
import { PendingApplicantError, RejectedApplicantError } from "../Errors";

const AVAILABLE_ROUTES_IN_PENDING_STATUS = [
  RoutesBuilder.applicant.editMyProfile(),
  RoutesBuilder.applicant.myProfile()
];

const AVAILABLE_ROUTES_IN_REJECTED_STATUS = [RoutesBuilder.applicant.myProfile()];

export const ApplicantPermissions = {
  check: (currentApplicant: TCurrentApplicant, route: string) => {
    if (currentApplicant.isPending() && !AVAILABLE_ROUTES_IN_PENDING_STATUS.includes(route)) {
      throw new PendingApplicantError();
    }
    if (currentApplicant.isRejected() && !AVAILABLE_ROUTES_IN_REJECTED_STATUS.includes(route)) {
      throw new RejectedApplicantError();
    }
  }
};
