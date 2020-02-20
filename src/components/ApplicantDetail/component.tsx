import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { IApplicantDetailProps } from "./interface";
import { DetailHeadline } from "$components//Details/DetailHeadline";
import { DetailByLine } from "$components/Details/DetailByLine";
import { DetailDescription } from "$components/Details/DetailDescription";
import { DetailMainContainer } from "$components/Details/DetailMainContainer";

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
    <DetailMainContainer render={
        <div className={styles.mainContainer}>
            <div className={styles.detailContainer}>
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
                    <section className={styles.capabilities}>
                        <span
                          className={styles.capabilityTitle}> {translations.capabilities}:
                        </span>
                        {
                            capabilities?.map(capability =>
                              (<span className={styles.capability}>{capability}</span>))
                        }
                    </section>
                    <section className={styles.careers}>
                        <span className={styles.careerTitle}> { translations.careers }: </span>
                        {
                            careers?.map(career =>
                                (
                                  <span className={styles.career}>
                            {career.name} - {career.credits} {translations.credits}
                        </span>)
                            )
                        }
                    </section>
                </div>
            </div>
        </div>
    }/>
);

export { ApplicantDetail };
