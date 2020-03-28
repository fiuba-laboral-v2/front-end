import React, { FunctionComponent } from "react";
import { IApplicantDetailProps } from "./interface";
import { DetailHeadline } from "$components//Detail/DetailHeadline";
import { CapabilitiesDetail } from "$pages/Applicant/Profile/CapabilitiesDetail";
import { CareersDetail } from "$pages/Applicant/Profile/CareersDetail";
import { SectionDetail } from "$pages/Applicant/Profile/SectionDetail";

import styles from "./styles.module.scss";

const Detail: FunctionComponent<IApplicantDetailProps> = (
  {
    applicant,
    translations
  }) => (
  <div className={styles.container}>
    <div className={styles.headline}>
      <DetailHeadline headline={`${applicant.name} ${applicant.surname}`}/>
      <div> Links </div>
    </div>
    <div className={styles.capabilitiesAndCareersContainer}>
      <CapabilitiesDetail
        className={styles.capabilities}
        title={translations.capabilities}
        capabilities={applicant.capabilities || []}
      />
      <CareersDetail className={styles.careers} careers={applicant.careers || []} />
    </div>
    <div className={styles.sections}>
      {
        applicant.sections?.map(section =>
          <SectionDetail title={section.title} text={section.text}/>
        )
      }
    </div>
  </div>
);

export { Detail };
