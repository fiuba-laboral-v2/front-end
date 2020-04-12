import React, { FunctionComponent } from "react";
import { Subtitle } from "$components/Subtitle";
import { TimeHumanizer } from "$components/TimeHumanizer";
import { JobSpecs } from "./JobSpecs";

import styles from "./styles.module.scss";

const Info: FunctionComponent = () => (
  <div className={styles.container}>
    <Subtitle className={styles.jobDescription}>
      Desarrollador Java Full Stack
    </Subtitle>
    <hr className={styles.separator} />
    <div className={styles.detailsContainer}>
      <div className={styles.firstColumn}>
        <Subtitle>
          GitHub
        </Subtitle>
        <TimeHumanizer since={new Date(new Date().setDate(new Date().getDate()-3))} />
      </div>
      <JobSpecs salary={"70000 - 52500"} workload={{time: "8", description: "horas por día"}} />
    </div>
  </div>
);

export { Info };
