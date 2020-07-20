import React, { FunctionComponent } from "react";
import { Headline } from "$components/Headline";
import { Links } from "$components/Links";
import { Card } from "$components/Card";
import { CapabilitiesDetail } from "$components/CapabilitiesDetail";
import { CareersDetail } from "$components/CareersDetail";
import { SectionDetail } from "$components/SectionDetail";

import styles from "./styles.module.scss";
import { Description } from "$components/Description";
import { IApplicantDetailProps } from "./interface";

export const ApplicantDetail: FunctionComponent<IApplicantDetailProps> = (
  {
    applicant,
    translations,
    editButton,
    statusLabel
  }
) => (
  <Card detail={true}>
    <div className={styles.headline}>
      <div className={styles.header}>
        <Headline className={styles.applicantName}>{
          `${applicant.user.name} ${applicant.user.surname}`
        }</Headline>
        {editButton}
        {statusLabel}
      </div>
      <Links links={applicant.links}/>
    </div>
    <div className={styles.capabilitiesAndCareersContainer}>
      <CapabilitiesDetail
        className={styles.capabilities}
        title={translations.capabilities}
        capabilities={applicant.capabilities}
      />
      <CareersDetail className={styles.careers} careers={applicant.careers}/>
    </div>
    <Description>{applicant.description}</Description>
    {
      applicant.sections.map(section =>
        <SectionDetail key={section.displayOrder} title={section.title} text={section.text}/>
      )
    }
  </Card>
);
