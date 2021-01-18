import React, { FunctionComponent } from "react";
import { CompanyLogo } from "$components/CompanyLogo";
import { Info } from "./Info";
import { IOffer } from "$interfaces/Offer";

import styles from "./styles.module.scss";

export const Offer: FunctionComponent<IOfferProps> = ({ offer, withStatusLabels }) => (
  <div className={styles.container}>
    <CompanyLogo
      className={styles.desktopLogo}
      companyName={offer.company.companyName}
      logo={offer.company.logo}
      size="extraLarge"
      useDefaultIcon
    />
    <Info offer={offer} withStatusLabels={withStatusLabels} />
  </div>
);

interface IOfferProps {
  offer: IOffer;
  withStatusLabels: boolean;
}
