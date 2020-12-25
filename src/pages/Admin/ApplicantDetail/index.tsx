import React, { FunctionComponent } from "react";
import { useApplicantByUuid } from "$hooks";
import { Window } from "$models/Window";
import { useParams } from "react-router-dom";
import { APPLICANT } from "$typenames";

import { ApplicantDetailInfo } from "../Home/Dashboard/TaskDetail/Applicant/ApplicantDetailInfo";
import { ApplicantDetailContent } from "../Home/Dashboard/TaskDetail/Applicant/ApplicantDetailContent";
import { Window as WindowComponent } from "$components/Window";

export const ApplicantDetail: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const applicant = useApplicantByUuid(uuid);
  return (
    <WindowComponent>
      {applicant && (
        <ApplicantDetailInfo
          selectedTask={{ __typename: APPLICANT, ...applicant }}
          onStatusUpdate={Window.reload}
        />
      )}
      <ApplicantDetailContent applicantUuid={uuid} />
    </WindowComponent>
  );
};
