import React, { FunctionComponent, ReactElement } from "react";
import classNames from "classnames";
import { Link } from "$components/Link";
import { CompanyLogo } from "$components/CompanyLogo";
import { Subtitle } from "$components/Subtitle";
import { Card } from "$components/Card";
import { StatusLabels } from "./StatusLabels";
import { Title } from "$components/Title";
import { SectionDetail } from "$components/SectionDetail";
import { OfferInfo } from "$components/OfferInfo";
import { sortBy } from "lodash";
import { IOffer } from "$interfaces/Offer";
import { IMyOffer } from "$interfaces/Applicant";
import styles from "./styles.module.scss";
import { PublishedSince } from "../PublishedSince";

export const OfferDetail: FunctionComponent<IOfferDetailProps> = ({
  mobileLayout,
  className,
  applyButton,
  editButton,
  offer,
  goToCompany,
  withStatusLabel
}) => (
  <Card className={classNames(styles.mainContainer, className, { [styles.mobile]: mobileLayout })}>
    <div className={styles.header}>
      <CompanyLogo
        mobileLayout={mobileLayout}
        className={styles.companyLogo}
        size="extraLarge"
        companyName={offer?.company.companyName}
        logo={offer?.company.logo}
        useDefaultIcon
      />
      <div className={styles.rightHeader}>
        <div className={styles.titleContainer}>
          <Title className={styles.title}>{offer?.title}</Title>
          <div>{editButton}</div>
        </div>
        <Subtitle className={styles.companyName}>
          {goToCompany && <Link to={goToCompany}>{offer?.company.companyName}</Link>}
          {!goToCompany && <p>{offer?.company.companyName}</p>}
        </Subtitle>
        <PublishedSince className={styles.updatedAt} date={offer?.updatedAt} />
        {withStatusLabel && (
          <StatusLabels
            targetApplicantType={offer?.targetApplicantType}
            graduadosApprovalStatus={offer?.graduadosApprovalStatus}
            extensionApprovalStatus={offer?.extensionApprovalStatus}
          />
        )}
      </div>
    </div>
    <div className={styles.body}>
      <div className={styles.leftBodyContainer}>
        <p className={styles.description}>{offer?.description}</p>
        {sortBy(offer?.sections, ["displayOrder"])?.map(({ displayOrder, title, text }) => (
          <SectionDetail key={displayOrder} title={title} text={text} />
        ))}
      </div>
      <div className={styles.rightBodyContainer}>
        <OfferInfo offer={offer} />
        {applyButton}
      </div>
    </div>
  </Card>
);

interface IOfferDetailProps {
  mobileLayout?: boolean;
  className?: string;
  applyButton?: ReactElement;
  editButton?: ReactElement;
  offer?: IMyOffer | IOffer;
  goToCompany?: string;
  withStatusLabel?: boolean;
}
