import React, { FunctionComponent } from "react";
import { Subtitle } from "$components/Subtitle";
import { TimeHumanizer } from "$components/TimeHumanizer";
import { JobSpecs } from "./JobSpecs";

import styles from "./styles.module.scss";

const dateExample = 1586490154821;

const Info: FunctionComponent = () => (
  <div className={styles.container}>
    <Subtitle className={styles.jobDescription}>
      Desarrollador Java Full Stack
    </Subtitle>
    <hr className={styles.separator}/>
    <div className={styles.detailsContainer}>
      <div className={styles.firstColumn}>
        <Subtitle>
          Mercado Libre
        </Subtitle>
        <TimeHumanizer since={dateExample} className={styles.time}/>
      </div>
      <div className={styles.secondColumn}>
        <JobSpecs
          salary={"70000 - 52500"}
          workload={{ time: "8", description: "horas por día" }}
        />
      </div>
    </div>
  </div>
);

export { Info };
