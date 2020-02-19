import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { IApplicantDetailProps } from "./interface";
import { DetailHeadline } from "$components//Details/DetailHeadline";
import { DetailByLine } from "$components/Details/DetailByLine";

const ApplicantDetail: FunctionComponent<IApplicantDetailProps> = (
  {
    name,
    surname,
    padron,
    description,
    careers,
    capabilities
  }) => (
  <div className={styles.mainContainer}>
      <div className={styles.detailContainer}>
          <div className={styles.header}>
              <div className={styles.fullNameContainer}>
                  <DetailHeadline headline={`${name} ${surname}`}/>
              </div>
              <div className={styles.padronContainer}>
                  <span className={styles.padronTitle}>{padron.translation}:</span>
                  <DetailByLine byLine={`${padron.value}`}/>
              </div>
              <div className={styles.descriptionContainer}>
                  <p className={styles.description}>{description}</p>
              </div>
          </div>
          <div className={styles.info}>
              <section className={styles.capabilities}>
                  <span className={styles.capabilityTitle}> { capabilities?.translation }: </span>
                  {
                    capabilities?.value!.map(capability =>
                      (<span className={styles.capability}>{capability}</span>))
                  }
              </section>
              <section className={styles.careers}>
                  <span className={styles.careerTitle}> { careers?.translations.careers }: </span>
                  {
                    careers?.value!.map(career =>
                      (
                        <span className={styles.career}>
                            {career.name} - {career.credits} {careers?.translations.credits}
                        </span>)
                      )
                  }
              </section>
          </div>
      </div>
  </div>
);

export { ApplicantDetail };
