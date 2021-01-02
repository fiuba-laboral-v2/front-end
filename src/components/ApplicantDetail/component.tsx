import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Links } from "$components/Links";
import { EmailLink } from "$components/EmailLink";
import { Card } from "$components/Card";
import { CapabilitiesDetail } from "$components/CapabilitiesDetail";
import { CareersSection } from "$components/CareersSection";
import { SectionDetail } from "$components/SectionDetail";
import { StatusTitle } from "$components/StatusTitle";
import { Description } from "$components/Description";

import styles from "./styles.module.scss";
import { IApplicantDetailProps } from "./interfaces";
import { Subtitle } from "../Subtitle";

export const ApplicantDetail: FunctionComponent<IApplicantDetailProps> = ({
  mobileLayout,
  className,
  applicant,
  translations,
  children,
  withStatusLabel,
  titleLink
}) => {
  const experienceSections = applicant?.experienceSections || [];
  const knowledgeSections = applicant?.knowledgeSections || [];
  return (
    <Card
      largePadding
      hidden={!applicant}
      className={classNames(className, { [styles.mobile]: mobileLayout })}
    >
      <div className={styles.headline}>
        <div className={styles.header}>
          <StatusTitle
            link={titleLink}
            className={styles.title}
            detailTitle={`${applicant?.user.name} ${applicant?.user.surname}`}
            approvalStatus={withStatusLabel ? applicant?.approvalStatus : undefined}
          />
          <div>{children}</div>
        </div>
        {applicant?.user.email && applicant?.links && (
          <>
            <EmailLink
              className={styles.link}
              name={applicant.user.email}
              email={applicant.user.email}
            />
            <Links className={styles.link} links={applicant.links} />
          </>
        )}
      </div>
      <div className={styles.capabilitiesAndCareersContainer}>
        <CapabilitiesDetail
          className={styles.capabilities}
          title={translations?.capabilities}
          capabilities={applicant?.capabilities || []}
        />
        <CareersSection
          className={styles.careers}
          careers={applicant?.careers || []}
          mobileLayout={mobileLayout}
        />
      </div>
      <Description>{applicant?.description}</Description>
      <div className={styles.sectionContainer} hidden={experienceSections.length === 0}>
        <Subtitle className={styles.sectionTitle}>{translations?.experienceSectionsTitle}</Subtitle>
        {experienceSections.map(section => (
          <SectionDetail
            className={styles.sectionDetail}
            key={section.displayOrder}
            title={section.title}
            text={section.text}
          />
        ))}
      </div>
      <div className={styles.sectionContainer} hidden={knowledgeSections.length === 0}>
        <Subtitle className={styles.sectionTitle}>{translations?.knowledgeSectionsTitle}</Subtitle>
        {knowledgeSections.map(section => (
          <SectionDetail
            className={styles.sectionDetail}
            key={section.displayOrder}
            title={section.title}
            text={section.text}
          />
        ))}
      </div>
    </Card>
  );
};
