import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { DetailHeadline } from "$components/Detail/DetailHeadline";
import { DetailByLine } from "$components/Detail/DetailByLine";
import { DetailDescriptionEditable } from "$components/DetailDescriptionEditable";
import { DetailMainContainer } from "$components/Detail/DetailMainContainer";
import { ApplicantItemsDetail } from "$components/ApplicantItemsDetail";
import { IApplicantDetailProps } from "$components/ApplicantDetail/interface";

const ApplicantDetailEditable: FunctionComponent<IApplicantDetailProps> = (
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
        <DetailDescriptionEditable description={description}/>
      </div>
    </div>
    <div className={styles.info}>
      <ApplicantItemsDetail
        items={capabilities}
        title={translations.capabilities}
      />
      <ApplicantItemsDetail
        items={careers}
        title={translations.careers}
        itemSuffix={translations.credits}
      />
    </div>
  </DetailMainContainer>
);

export { ApplicantDetailEditable };
