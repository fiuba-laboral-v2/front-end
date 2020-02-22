import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { IApplicantDetailProps } from "./interface";
import { DetailHeadline } from "$components//Detail/DetailHeadline";
import { DetailByLine } from "$components/Detail/DetailByLine";
import { DetailDescription } from "$components/Detail/DetailDescription";
import { DetailMainContainer } from "$components/Detail/DetailMainContainer";
import { ApplicantItemsDetail } from "$components/ApplicantItemsDetail";

const ApplicantDetail: FunctionComponent<IApplicantDetailProps> = (
  {
    name,
    surname,
    padron,
    description,
    careers,
    capabilities,
    translations
  }) => (
  <DetailMainContainer>
      <div className={styles.header}>
          <div className={styles.fullNameContainer}>
              <DetailHeadline headline={`${name} ${surname}`}/>
          </div>
          <div className={styles.padronContainer}>
              <span className={styles.padronTitle}>{translations.padron}:</span>
              <DetailByLine byLine={padron}/>
          </div>
          <div className={styles.descriptionContainer}>
              <DetailDescription  description={description}/>
          </div>
      </div>
      <div className={styles.info}>
          <ApplicantItemsDetail
            items={capabilities}
            title={translations.capabilities}
          />
          <ApplicantItemsDetail
            items={careers?.map(career => `${career.name} - ${career.credits}`)}
            title={translations.careers}
            itemSuffix={translations.credits}
          />
      </div>
  </DetailMainContainer>
);

export { ApplicantDetail };
