import React, { FunctionComponent } from "react";
import { ICareersProps } from "./interface";
import { GraduateCareerDetail } from "./GraduateCareerDetail";
import { StudentCareerDetail } from "./StudentCareerDetail";
import styles from "./styles.module.scss";
import { Subtitle } from "$components/Subtitle";

export const CareersDetail: FunctionComponent<ICareersProps> = (
  {
    className,
    careers,
    translations
  }) => {
  return (
    <div className={className}>
      <section className={styles.items}>
        <Subtitle>{translations.careersTitle}</Subtitle>
        {
          careers?.map((applicantCareer, index) =>
            <div key={index} className={styles.item}>
              {applicantCareer.isGraduate ?
                <GraduateCareerDetail
                  applicantCareer={applicantCareer}
                  translations={translations}
                />
                :
                <StudentCareerDetail
                  applicantCareer={applicantCareer}
                  translations={translations}
                />
              }
            </div>
          )
        }
      </section>
    </div>
  );
};
