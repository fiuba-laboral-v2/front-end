import React, { FunctionComponent } from "react";
import { Title } from "./Title";
import { CompanyName } from "./CompanyName";
import { TimeHumanizer } from "$components/TimeHumanizer";

import styles from "./styles.module.scss";

const Info: FunctionComponent = () => (
  <div className={styles.container}>
    <Title>
      Desarrollador Java Full Stack
    </Title>
    <hr className={styles.separator} />
    <div className={styles.detailsContainer}>
      <CompanyName>
        GitHub
      </CompanyName>
      <TimeHumanizer since={new Date(new Date().setDate(new Date().getDate()-3))} />
      {/* <JobSpecs /> */}
    </div>
  </div>
);

export { Info };
