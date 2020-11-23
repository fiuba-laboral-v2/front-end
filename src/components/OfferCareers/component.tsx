import React, { Fragment, FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { OfferInfoItem } from "../OfferInfoItem";
import { CareerList } from "../CareerList";

import { IOfferCareersComponentProps } from "./interfaces";

const OfferCareers: FunctionComponent<IOfferCareersComponentProps> = ({
  offer,
  careersTitle,
  className
}) => {
  if (offer?.careers === undefined || offer.careers.length === 0) return <Fragment />;
  return (
    <OfferInfoItem className={classNames(styles.careers, className)} title={careersTitle}>
      <CareerList careers={offer.careers} className={styles.career} />
    </OfferInfoItem>
  );
};

export { OfferCareers };
