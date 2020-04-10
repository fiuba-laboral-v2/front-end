import React, { FunctionComponent } from "react";
import { DetailHeadline } from "$components/Detail/DetailHeadline";
import { Links } from "$components/Links";
import { CapabilitiesDetail } from "$pages/Applicant/Profile/CapabilitiesDetail";
import { CareersDetail } from "$pages/Applicant/Profile/CareersDetail";
import { SectionDetail } from "$pages/Applicant/Profile/SectionDetail";

import styles from "./styles.module.scss";
import { IApplicant } from "$interfaces/Applicant";

const Detail: FunctionComponent<IApplicantDetailProps> = (
  {
    applicant,
    translations
  }) => (
  <div className={styles.container}>
    <div className={styles.headline}>
      <DetailHeadline headline={`${applicant.name} ${applicant.surname}`}/>
      <Links links={applicant.links}/>
    </div>
    <div className={styles.capabilitiesAndCareersContainer}>
      <CapabilitiesDetail
        className={styles.capabilities}
        title={translations.capabilities}
        capabilities={applicant.capabilities}
      />
      <CareersDetail className={styles.careers} careers={applicant.careers || []}/>
    </div>
    <SectionDetail text={applicant.description}/>
    {
      applicant.sections?.map(section =>
        <SectionDetail key={section.displayOrder} title={section.title} text={section.text}/>
      )
    }
  </div>
);

interface ITranslations {
  padron: string;
  capabilities: string;
}

interface IApplicantDetailProps {
  applicant: IApplicant;
  translations: ITranslations;
}

export { Detail };
