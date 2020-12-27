import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { ApplicantDetail } from "$components/ApplicantDetail";
import { OfferDetail } from "$components/OfferDetail";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const JobApplicationDetailContent: FunctionComponent<IComponentProps> = ({
  applicant,
  offer,
  className,
  hidden,
  mobileLayout
}) => (
  <div className={classNames(styles.detailContent, className)} {...{ hidden }}>
    <ApplicantDetail
      className={classNames(styles.applicantDetail, { [styles.desktopLayout]: !mobileLayout })}
      mobileLayout={mobileLayout}
      applicant={applicant}
    />
    <OfferDetail
      className={classNames(styles.offerDetail, { [styles.desktopLayout]: !mobileLayout })}
      mobileLayout={mobileLayout}
      offer={offer}
    />
  </div>
);
