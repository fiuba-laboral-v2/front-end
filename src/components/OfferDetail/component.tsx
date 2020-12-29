import React, { FunctionComponent, ReactElement, useMemo } from "react";
import classNames from "classnames";
import { Link } from "$components/Link";
import { CompanyLogo } from "$components/CompanyLogo";
import { Subtitle } from "$components/Subtitle";
import { Card } from "$components/Card";
import { StatusLabels } from "./StatusLabels";
import { Title } from "$components/Title";
import { SectionDetail } from "$components/SectionDetail";
import { OfferInfo } from "$components/OfferInfo";
import { IOffer } from "$interfaces/Offer";
import { ApplicantType, IMyOffer } from "$interfaces/Applicant";
import styles from "./styles.module.scss";
import { PublishedSince } from "../PublishedSince";
import { sortSections } from "../../models/sortSections";
import { InternshipLabel } from "../InternshipLabel";

export const OfferDetail: FunctionComponent<IOfferDetailProps> = ({
  mobileLayout,
  className,
  applyButton,
  actions,
  offer,
  goToCompany,
  withStatusLabel,
  labelTargetApplicantType,
  titleLink
}) => {
  const sections = useMemo(() => sortSections(offer?.sections), [offer]);

  return (
    <Card
      hidden={!offer}
      className={classNames(styles.mainContainer, className, { [styles.mobile]: mobileLayout })}
    >
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
            <Title className={styles.title} link={titleLink}>
              {offer?.title}
            </Title>
            {actions}
          </div>
          <Subtitle className={styles.companyName}>
            {goToCompany && <Link to={goToCompany}>{offer?.company.companyName}</Link>}
            {!goToCompany && <p>{offer?.company.companyName}</p>}
          </Subtitle>
          <PublishedSince className={styles.updatedAt} date={offer?.updatedAt} />
          <InternshipLabel className={styles.internshipLabel} hidden={!offer?.isInternship} />
          {withStatusLabel && offer && (
            <StatusLabels offer={offer} targetApplicantType={labelTargetApplicantType} />
          )}
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.leftBodyContainer}>
          <p className={styles.description}>{offer?.description}</p>
          {sections.map(({ displayOrder, title, text }) => (
            <SectionDetail
              className={styles.sectionDetail}
              key={displayOrder}
              title={title}
              text={text}
            />
          ))}
        </div>
        <div className={styles.rightBodyContainer}>
          <OfferInfo offer={offer} />
          {applyButton}
        </div>
      </div>
    </Card>
  );
};

interface IOfferDetailProps {
  mobileLayout?: boolean;
  className?: string;
  applyButton?: ReactElement;
  actions?: ReactElement;
  offer?: IMyOffer | IOffer;
  goToCompany?: string;
  withStatusLabel?: boolean;
  titleLink?: string;
  labelTargetApplicantType?: ApplicantType;
}
