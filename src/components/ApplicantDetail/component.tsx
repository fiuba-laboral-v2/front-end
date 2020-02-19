import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { IApplicantDetailProps } from "./interface";

const ApplicantDetail: FunctionComponent<IApplicantDetailProps> = (
  {
    name,
    surname,
    padron,
    description,
    credits,
    careers,
    capabilities
  }) => (
  <div className={styles.mainContainer}>
      <div className={styles.detailContainer}>
          <div className={styles.header}>
              <div className={styles.fullNameContainer}>
                  <span className={styles.fullName}>{name} {surname}</span>
              </div>
              <div className={styles.padronContainer}>
                  <span className={styles.padron}>padron: {padron}</span>
              </div>
              <div className={styles.descriptionContainer}>
                  <p className={styles.description}>{description}</p>
              </div>
          </div>
          <div className={styles.info}>
              <div className={styles.creditsContainer}>
                  <span className={styles.credits}>credits: {credits}</span>
              </div>
              <section className={styles.capabilities}>
                  {
                    capabilities!.map(capability =>
                      (<span className={styles.capability}>{capability}</span>))
                  }
              </section>
              <section className={styles.careers}>
                  {
                    careers!.map(career =>
                      (<span className={styles.career}>{career}</span>))
                  }
              </section>
          </div>
      </div>
  </div>
);

export { ApplicantDetail };
