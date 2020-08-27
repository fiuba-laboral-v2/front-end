import React, { FunctionComponent } from "react";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { JobApplicationDetailContent } from "./component";
import { useApplicantByUuid, useCompanyOfferByUuid } from "$hooks/queries";
import { IContainerProps } from "./interfaces";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { useUpdateAdminTaskStatus } from "$hooks/mutations";
import { UPDATE_APPLICANT_APPROVAL_STATUS } from "$mutations";
import { APPLICANT } from "$typenames";

export const JobApplicationDetailContentContainer: FunctionComponent<IContainerProps> = (
  {
    onStatusUpdate,
    refetchAdminTasks,
    applicantUuid,
    offerUuid,
    scrollToTop,
    className
  }
) => {
  const applicantResponse = useApplicantByUuid(applicantUuid);
  const offerResponse = useCompanyOfferByUuid(offerUuid);
  const updateAdminTaskStatus = useUpdateAdminTaskStatus({
    documentNode: UPDATE_APPLICANT_APPROVAL_STATUS,
    refetchAdminTasks,
    type: APPLICANT,
    approvalStatusAttribute: "approvalStatus"
  });

  if (applicantResponse.error || applicantResponse.loading) return <LoadingSpinner/>;
  if (offerResponse.error || offerResponse.loading) return <LoadingSpinner/>;
  scrollToTop();

  const setApplicantStatus = async (status: ApprovalStatus) => {
    await updateAdminTaskStatus({
      uuid: applicantUuid,
      status,
      onStatusUpdate
    });
  };

  return <JobApplicationDetailContent
    setStatus={setApplicantStatus}
    applicant={applicantResponse.data.getApplicant}
    offer={offerResponse.data.getOfferByUuid}
    className={className}
  />;
};
