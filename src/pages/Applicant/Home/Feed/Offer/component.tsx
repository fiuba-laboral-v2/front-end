import React, { FunctionComponent } from "react";
import { CompanyLogo } from "$components/CompanyLogo";
import { Info } from "./Info";
import { IOffer } from "$interfaces/Offer";

import styles from "./styles.module.scss";

const Offer: FunctionComponent<IOfferProps> = ({ data: { company, ...props } }) => (
  <div className={styles.container}>
    <CompanyLogo
      className={styles.desktopLogo}
      companyName={company.companyName}
      logo={company.logo}
      size="extraLarge"
    />
    <Info data={{ company, ...props }}/>
  </div>
);

interface IOfferProps {
  data: IOffer;
}

export { Offer };
