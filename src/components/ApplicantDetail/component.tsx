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

export const ApplicantDetail: FunctionComponent<IApplicantDetailProps> = ({
  mobileLayout,
  className,
  applicant,
  translations,
  editButton,
  withStatusLabel
}) => (
  <Card
    largePadding
    hidden={!applicant}
    className={classNames(className, { [styles.mobile]: mobileLayout })}
  >
    <div className={styles.headline}>
      <div className={styles.header}>
        <StatusTitle
          className={styles.title}
          detailTitle={`${applicant?.user.name} ${applicant?.user.surname}`}
          approvalStatus={withStatusLabel ? applicant?.approvalStatus : undefined}
        />
        <div>{editButton}</div>
      </div>
      {applicant?.user.email && applicant?.links && (
        <>
          <EmailLink name={applicant.user.email} email={applicant.user.email} />
          <Links links={applicant.links} />
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
    {applicant?.knowledgeSections?.map(section => (
      <SectionDetail key={section.displayOrder} title={section.title} text={section.text} />
    ))}
    {applicant?.experienceSections?.map(section => (
      <SectionDetail key={section.displayOrder} title={section.title} text={section.text} />
    ))}
  </Card>
);
