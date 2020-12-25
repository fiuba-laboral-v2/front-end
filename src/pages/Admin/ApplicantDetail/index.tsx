import React, { FunctionComponent } from "react";
import { useApplicantByUuid } from "$hooks";
import { useParams } from "react-router-dom";
import { ApplicantDetailInfo } from "../Home/Dashboard/TaskDetail/Applicant/ApplicantDetailInfo";
import { ApplicantDetailContent } from "../Home/Dashboard/TaskDetail/Applicant/ApplicantDetailContent";
import { APPLICANT } from "$typenames";

export const ApplicantDetail: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const applicant = useApplicantByUuid(uuid);
  return (
    <>
      {applicant && <ApplicantDetailInfo selectedTask={{ __typename: APPLICANT, ...applicant }} />}
      <ApplicantDetailContent applicantUuid={uuid} scrollToTop={() => undefined} />
    </>
  );
};
