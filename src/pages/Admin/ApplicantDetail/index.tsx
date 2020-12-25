import React, { FunctionComponent } from "react";
import { Window } from "$models/Window";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";

import { ApplicantDetailInfo, ApplicantDetailContent } from "../components/Applicant";
import { Window as WindowComponent } from "$components/Window";

export const ApplicantDetail: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  return (
    <WindowComponent>
      <ApplicantDetailInfo selectedTaskUuid={uuid} onStatusUpdate={Window.reload} />
      <ApplicantDetailContent className={styles.content} applicantUuid={uuid} />
    </WindowComponent>
  );
};
