import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Links } from "$components/Links";
import { Card } from "$components/Card";
import { CapabilitiesDetail } from "$components/CapabilitiesDetail";
import { CareersSection } from "$components/CareersSection";
import { SectionDetail } from "$components/SectionDetail";
import { StatusTitle } from "$components/StatusTitle";
import { Description } from "$components/Description";

import styles from "./styles.module.scss";
import { IApplicantDetailProps } from "./interface";

export const ApplicantDetail: FunctionComponent<IApplicantDetailProps> = ({
  mobileLayout,
  className,
  applicant: {
    user: { name, surname, email },
    description,
    approvalStatus,
    careers,
    links,
    knowledgeSections,
    experienceSections,
    capabilities
  },
  translations,
  editButton,
  withStatusLabel
}) => (
  <Card largePadding className={classNames(className, { [styles.mobile]: mobileLayout })}>
    <div className={styles.headline}>
      <div className={styles.header}>
        <StatusTitle
          className={styles.title}
          detailTitle={`${name} ${surname}`}
          approvalStatus={withStatusLabel ? approvalStatus : undefined}
        />
        <div>{editButton}</div>
      </div>
      <Links links={[{ name: email, url: email }]} />
      <Links links={links} />
    </div>
    <div className={styles.capabilitiesAndCareersContainer}>
      <CapabilitiesDetail
        className={styles.capabilities}
        title={translations.capabilities}
        capabilities={capabilities}
      />
      <CareersSection className={styles.careers} careers={careers} />
    </div>
    <Description>{description}</Description>
    {knowledgeSections.map(section => (
      <SectionDetail key={section.displayOrder} title={section.title} text={section.text} />
    ))}
    {experienceSections.map(section => (
      <SectionDetail key={section.displayOrder} title={section.title} text={section.text} />
    ))}
  </Card>
);
