import React, { FunctionComponent } from "react";
import { CompanyLogo } from "$components/CompanyLogo";
import { Info } from "./Info";
import { IOffer } from "$interfaces/Offer";
// import githubLogo from "./github_logo.svg";

import styles from "./styles.module.scss";

const Offer: FunctionComponent<IOfferProps> = ({data: {company, ...props}}) => (
  <div className={styles.container}>
    <CompanyLogo
      companyName={company.companyName}
      logo={company.logo}
      size="large"
    />
    <Info data={{company, ...props}}/>
  </div>
);

interface IOfferProps {
  data: IOffer;
}

export { Offer };
