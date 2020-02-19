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
                  <span className={styles.padronTitle}>{padron.translation}:</span>
                  <span className={styles.padron}>{padron.value}</span>
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
                  <span className={styles.careerTitle}> { careers?.translation }: </span>
                  {
                    careers?.value!.map(career =>
                      (
                        <span className={styles.career}>
                            {career.name} - {career.credits} {credits.translation}
                        </span>)
                      )
                  }
              </section>
          </div>
      </div>
  </div>
);

export { ApplicantDetail };
