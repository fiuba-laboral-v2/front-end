import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { IApplicantDetailProps } from "./interface";
import { DetailHeadline } from "$components//Detail/DetailHeadline";
import { DetailByLine } from "$components/Detail/DetailByLine";
import { DetailDescription } from "$components/Detail/DetailDescription";
import { DetailMainContainer } from "$components/Detail/DetailMainContainer";
import { CapabilitiesDetail } from "$components/CapabilitiesDetail";
import { CareersDetail } from "$components/CareersDetail";

const ApplicantDetail: FunctionComponent<IApplicantDetailProps> = (
  {
    applicant,
    translations
  }) => (
  <DetailMainContainer>
      <div className={styles.header}>
          <div className={styles.fullNameContainer}>
              <DetailHeadline headline={`${applicant.name} ${applicant.surname}`}/>
          </div>
          <div className={styles.padronContainer}>
              <span className={styles.padronTitle}>{translations.padron}:</span>
              <DetailByLine byLine={applicant.padron}/>
          </div>
          <div className={styles.descriptionContainer}>
              <DetailDescription  description={applicant.description}/>
          </div>
      </div>
      <div className={styles.info}>
        <CapabilitiesDetail
          title={translations.capabilities}
          capabilities={applicant.capabilities}
        />
        <CareersDetail
          careers={applicant.careers}
          capabilitiesTitle={translations.careers}
          creditsTitle={translations.credits}
        />
      </div>
  </DetailMainContainer>
);

export { ApplicantDetail };
