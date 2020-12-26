import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

import {
  JobApplicationDetailInfo,
  JobApplicationDetailContent
} from "../Home/Dashboard/TaskDetail/JobApplication";
import { Window } from "$components/Window";

import styles from "./styles.module.scss";

export const JobApplicationDetail: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  return (
    <Window>
      <JobApplicationDetailInfo selectedTaskUuid={uuid} />
      <JobApplicationDetailContent className={styles.content} jobApplicationUuid={uuid} />
    </Window>
  );
};
