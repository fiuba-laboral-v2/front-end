import React, { FunctionComponent } from "react";
import { CompanyLogo } from "$components/CompanyLogo";
import { Info } from "./Info";
import githubLogo from "./github_logo.svg";

import styles from "./styles.module.scss";

const Offer: FunctionComponent = () => (
  <div className={styles.container}>
    <CompanyLogo
      companyName={"GitHub"}
      logo={githubLogo}
      size="large"
    />
    <Info />
  </div>
);

export { Offer };
