import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";

import { ApplicantDetailInfo, ApplicantDetailContent } from "../components/Applicant";
import { Window } from "$components/Window";

export const ApplicantDetail: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  return (
    <Window>
      <ApplicantDetailInfo selectedTaskUuid={uuid} />
      <ApplicantDetailContent className={styles.content} applicantUuid={uuid} />
    </Window>
  );
};
