import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

import {
  JobApplicationDetailInfo,
  JobApplicationDetailContent
} from "../components/JobApplication";
import { Window } from "$components/Window";

import styles from "./styles.module.scss";

export const JobApplicationDetail: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  return (
    <Window className={styles.taskDetail}>
      <JobApplicationDetailInfo selectedTaskUuid={uuid} />
      <JobApplicationDetailContent className={styles.content} jobApplicationUuid={uuid} />
    </Window>
  );
};
