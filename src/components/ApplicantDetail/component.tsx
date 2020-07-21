import React, { FunctionComponent } from "react";
import { Links } from "$components/Links";
import { Card } from "$components/Card";
import { CapabilitiesDetail } from "$components/CapabilitiesDetail";
import { CareersDetail } from "$components/CareersDetail";
import { SectionDetail } from "$components/SectionDetail";
import { StatusTitle } from "$components/StatusTitle";

import styles from "./styles.module.scss";
import { Description } from "$components/Description";
import { IApplicantDetailProps } from "./interface";

export const ApplicantDetail: FunctionComponent<IApplicantDetailProps> = (
  {
    applicant: {
      user: {
        name,
        surname
      },
      description,
      approvalStatus,
      careers,
      links,
      sections,
      capabilities
    },
    translations,
    editButton,
    withStatusLabel
  }
) => (
  <Card largePadding={true}>
    <div className={styles.headline}>
      <div className={styles.header}>
        <StatusTitle
          className={styles.title}
          detailTitle={`${name} ${surname}`}
          approvalStatus={withStatusLabel ? approvalStatus : undefined}
        />
        {editButton}
      </div>
      <Links links={links}/>
    </div>
    <div className={styles.capabilitiesAndCareersContainer}>
      <CapabilitiesDetail
        className={styles.capabilities}
        title={translations.capabilities}
        capabilities={capabilities}
      />
      <CareersDetail className={styles.careers} careers={careers}/>
    </div>
    <Description>{description}</Description>
    {
      sections.map(section =>
        <SectionDetail key={section.displayOrder} title={section.title} text={section.text}/>
      )
    }
  </Card>
);
