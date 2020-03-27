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
  <div className={styles.detailContainer}>
    <div className={styles.headline}>
      <DetailHeadline headline={`${applicant.name} ${applicant.surname}`}/>
      <div> Links </div>
    </div>
    <div className={styles.firstContainerInfo}>
      <div className={styles.capabilities}>
        <CapabilitiesDetail
          title={translations.capabilities}
          capabilities={applicant.capabilities || []}
        />
      </div>
      <div className={styles.careers}>
        <CareersDetail careers={applicant.careers || []} />
      </div>
    </div>
    <div className={styles.sections}>
      <SectionDetail title={"Experiencia Laboral"} text={applicant.description}/>
    </div>
  </div>
);

export { Detail };
