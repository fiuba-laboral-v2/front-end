import React, { FunctionComponent } from "react";
import { CompanyLogo } from "$components/CompanyLogo";
import { Info } from "./Info";
import { IOffer } from "$interfaces/Offer";

import styles from "./styles.module.scss";

export const Offer: FunctionComponent<IOfferProps> = ({
  data: { company, ...props },
  withStatusLabels
}) => (
  <div className={styles.container}>
    <CompanyLogo
      className={styles.desktopLogo}
      companyName={company.companyName}
      logo={company.logo}
      size="extraLarge"
    />
    <Info data={{ company, ...props }} withStatusLabels={withStatusLabels} />
  </div>
);

interface IOfferProps {
  data: IOffer;
  withStatusLabels: boolean;
}
