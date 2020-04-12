import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { OfferInfoItem } from "../OfferInfoItem";

import { IOfferCareersComponentProps } from "./interface";

const OfferCareers: FunctionComponent<IOfferCareersComponentProps> = (
  {
    offer,
    title,
    className
  }) => (
  <OfferInfoItem className={classNames(styles.careers, className)} title={title}>
    {
      offer.careers?.map(({ code, description }) =>
        <div key={code} className={styles.career}>{description}</div>
      )
    }
  </OfferInfoItem>
);

export { OfferCareers };
